import { Request, Response, Router } from 'express';
import removeAnimeController from '../../controllers/anime/removeAnime';

const router = Router();

router.delete('/anime', (req: Request, res: Response) => {
    removeAnimeController(req, res);
});

export default router;