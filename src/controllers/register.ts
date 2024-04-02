import { Request, Response } from "express";
import { User } from "../models";
import { ValidationError } from "sequelize";

export const registerController = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {
        // Use name, email, and password to register a new user
        await User.create({ email, name, password });
        res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        if (error instanceof ValidationError) {
            res.status(400).json({ message: error.message });
            return;
        }
        res.status(500).json({ message: "Internal Server Error" });
    }
};
