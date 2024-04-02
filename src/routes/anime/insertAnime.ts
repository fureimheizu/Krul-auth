import { Request, Response, Router } from 'express';
import insertAnimeController from '../../controllers/anime/insertAnime';
import verifyTokenMiddleware from '../../middlewares/authentication/verifyTokenMiddleware';

const router = Router();

router.post('/anime', [verifyTokenMiddleware], (req: Request, res: Response) => {
    insertAnimeController(req, res);
});

export default router;