import { Request, Response } from 'express';
import { Anime } from '../../models';

const removeAnimeController = async (req: Request, res: Response) => {
    try {
        const { animeId } = req.params;

        // Check if the anime exists
        const anime = await Anime.findOne({ where: { id: animeId } });
        
        if (!anime) {
            return res.status(404).json({ message: 'Anime not found' });
        }

        // Remove the anime
        await anime.destroy();

        res.json({ message: 'Anime removed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export default removeAnimeController;