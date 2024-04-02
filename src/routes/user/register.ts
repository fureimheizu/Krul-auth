import express, { Request, Response } from "express";
import { registerController } from "../../controllers/register";
import registerValidatorMiddleware from "../../middlewares/validators/registerValidatorMiddleware";
import hashPasswordMiddleware from "../../middlewares/utils/hashPasswordMiddleware";
const router = express.Router();

router.post("/register", [registerValidatorMiddleware, hashPasswordMiddleware], (req: Request, res: Response) => {
    // Invoke the registerController here
    registerController(req, res);
});

export default router;
