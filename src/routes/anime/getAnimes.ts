import { Request, Response, Router } from 'express';
import getAnimesController from '../../controllers/anime/getAnimes';

const router = Router();

router.get('/anime/:id?', (req: Request, res: Response) => {
    getAnimesController(req, res);
});

export default router;