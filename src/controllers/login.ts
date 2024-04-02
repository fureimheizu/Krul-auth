import { Request, Response } from "express";
import { User } from "../models";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken";

export const loginController = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    // Use email to find a user
    const user = await User.findOne({ where: { email } });

    // Compare the password with the hashed password
    if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                res.status(500).json({ message: "Internal server error" });
                return;
            }
            if (!result) {
                res.status(401).json({ message: "Wrong username or password" });
                return;
            }

            const jwtSecret = process.env.JWT_SECRET; // Ensure JWT_SECRET is defined
            if (!jwtSecret) {
                res.status(500).json({ message: "JWT secret is not defined" });
                return;
            }
            const token = generateToken({ email: user.email, name: user.name, banana: "ciao" }, jwtSecret, { expiresIn: "1h" });
            res.status(200).json({ message: "Login successful", token });
        });
    } else {
        res.status(404).json({ message: "User not found" });
    }
};
