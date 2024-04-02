import { Request, Response, Router } from 'express';
import getAnimesController from '../../controllers/anime/getAnimes';
import verifyTokenMiddleware from '../../middlewares/authentication/verifyTokenMiddleware';

const router = Router();

router.get('/anime/:id?', [verifyTokenMiddleware], (req: Request, res: Response) => {
    getAnimesController(req, res);
});

export default router;