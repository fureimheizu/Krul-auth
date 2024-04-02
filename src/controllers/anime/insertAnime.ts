import { NextFunction, Request, Response } from "express"
import { Anime } from "../../models"
import { ValidationError } from "sequelize"

const insertAnimeController = async (req: Request, res: Response) => {
    const data = req.body

    try {
        await Anime.create(data)
        res.status(200).json({ message: "Anime inserted successfully" });
        return
    } catch (error) {
        if(error instanceof ValidationError) {
            res.status(400).json({ message: error.message, error })
            return
        }
        console.error(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export default insertAnimeController;