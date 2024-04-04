import { Request, Response } from 'express';
import { TokensBlacklist } from '../models';

export const logoutController = (req: Request, res: Response) => {
    const token = req.headers.authorization;

    if (token) {
        const accessToken = token.split(' ')[1];

        TokensBlacklist.create({ token: accessToken });

        res.status(200).json({ message: 'Logged out successfully' });
        return;
    }

    res.status(400).json({ message: 'Invalid token' });
    return;
};