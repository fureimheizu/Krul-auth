import { Request, Response, Router } from 'express';
import removeAnimeController from '../../controllers/anime/removeAnime';
import verifyTokenMiddleware from '../../middlewares/authentication/verifyTokenMiddleware';

const router = Router();

router.delete('/anime', [verifyTokenMiddleware],  (req: Request, res: Response) => {
    removeAnimeController(req, res);
});

export default router;