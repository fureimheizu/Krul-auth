import express, { Request, Response } from 'express';
import { logoutController } from '../../controllers/logout';

const router = express.Router();

router.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ status: "OK", message: "Service is online" });
});

export default router;