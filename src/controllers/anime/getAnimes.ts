import { Request, Response } from "express";
import { Anime } from "../../models";

const getAnimesController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { page, size } = req.query;

    try {
        if (id) {
            const anime = await Anime.findOne({ where: { id } });

            if(!anime) return res.status(404).json({ error: "Anime not found" });
            return res.status(200).json(anime);
        }

        if (!page || !size) return res.status(400).json({ error: "Invalid request" });

        const parsedPage = parseInt(page as string, 10);
        const parsedSize = parseInt(size as string, 10);

        if (isNaN(parsedPage) || isNaN(parsedSize)) return res.status(400).json({ error: "Invalid request" });

        const animes = await Anime.findAll({
            offset: parsedPage * parsedSize,
            limit: parsedSize,
        });

        res.status(200).json(animes);
    } catch (error) {
        console.error("Error retrieving anime data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export default getAnimesController;