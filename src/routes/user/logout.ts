import express, { Request, Response } from 'express';
import { logoutController } from '../../controllers/logout';

const router = express.Router();

router.get('/logout', (req: Request, res: Response) => {
    logoutController(req, res);
});

export default router;