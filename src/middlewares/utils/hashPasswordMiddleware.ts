import { Request, Response, NextFunction } from "express";
import bcrypt from 'bcrypt'

const saltRounds = 10;

const hashPasswordMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;

    try {
        // Hash the password
        const hash = await bcrypt.hash(password, saltRounds);
        req.body.password = hash;
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
        return;
    }

    next();
};

export default hashPasswordMiddleware;
