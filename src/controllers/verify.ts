import { Request, Response } from "express";
import jwt from 'jsonwebtoken'

export const verifyTokenController = async (req: Request, res: Response) => {
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
        return res.status(500).json({ status: "Error", message: "Internal Server Error" });
    }

    const token = req.headers.authorization

    if (!token) {
        return res.status(401).json({ status: "Error", message: "No token provided" })
    }

    const accessToken = token.split(" ")[1]
    jwt.verify(accessToken, jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ status: "Error", message: "Token is not valid" })
        }
        res.status(200).json({ status: "OK", message: "Token is valid" })
    })
};
