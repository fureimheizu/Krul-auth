import { Request, Response, Router } from 'express';
import insertAnimeController from '../../controllers/anime/insertAnime';

const router = Router();

router.post('/anime', (req: Request, res: Response) => {
    insertAnimeController(req, res);
});

export default router;