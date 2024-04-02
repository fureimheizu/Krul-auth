import { Request, Response, NextFunction } from "express";

const registerValidatorMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;

    // Check if username, email, and password are provided
    if (!name || !email || !password) {
        return res.status(400).json({ message: "Username, email, and password are required." });
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email address." });
    }

    // Check if password meets minimum requirements (e.g., length)
    if (password.length < 8) {
        return res.status(400).json({ message: "Password must be at least 8 characters long." });
    }

    // If all validations pass, proceed to the next middleware
    next();
};

export default registerValidatorMiddleware;