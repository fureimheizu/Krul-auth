import { Request, Response, Router } from 'express';
import updateAnimeController from '../../controllers/anime/updateAnime';
import verifyTokenMiddleware from '../../middlewares/authentication/verifyTokenMiddleware';

const router = Router();

router.put('/anime', [verifyTokenMiddleware], (req: Request, res: Response) => {
    updateAnimeController(req, res);
});

export default router;