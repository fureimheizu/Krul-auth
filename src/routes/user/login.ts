import express, { Request, Response } from 'express';
import { loginController } from '../../controllers/login';

const router = express.Router();

router.post('/login', (req: Request, res: Response) => {
    loginController(req, res);
});

export default router;