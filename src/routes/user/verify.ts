import express, { Request, Response } from 'express';
import { verifyTokenController } from '../../controllers/verify';

const router = express.Router();

router.post('/verify-token', (req: Request, res: Response) => {
    verifyTokenController(req, res);
});

export default router;