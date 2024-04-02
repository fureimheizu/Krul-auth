import { Request, Response, Router } from 'express';
import updateAnimeController from '../../controllers/anime/updateAnime';

const router = Router();

router.put('/anime', (req: Request, res: Response) => {
    updateAnimeController(req, res);
});

export default router;