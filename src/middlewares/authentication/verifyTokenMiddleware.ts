import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const verifyTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
    
    const token = req.headers.authorization

    if(!token) {
        return res.status(401).json({ message: "No token provided" })
    }

    const accessToken = token.split(" ")[1]
    jwt.verify(accessToken, jwtSecret, (err, decoded) => {
        console.log(token)
        if(err) {
            return res.status(401).json({ message: "Token is not valid" })
        }

        next()
    })
}

export default verifyTokenMiddleware