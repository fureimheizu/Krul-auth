import { Request, Response } from 'express';
import { Anime } from '../../models';
import { ValidationError } from 'sequelize';

const updateAnimeController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const anime = await Anime.findOne({ where: { id } });

        if (anime) {
            await Anime.update(req.body, { where: { id } });
            res.status(200).json({ message: 'Anime updated successfully' });
            return;
        }

        res.status(404).json({ message: 'Anime not found' });
    } catch (error) {
        console.error(error);
        if (error instanceof ValidationError) {
            res.status(400).json({ message: error.message });
            return;
        }
        res.status(500).json({ message: 'Internal server error' });
    }
};

export default updateAnimeController;