import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { sequelize } from "./models";
import RegisterRoute from "./routes/user/register";
import LoginRoute from "./routes/user/login";
import GetAnimeRoute from "./routes/anime/getAnimes";
import InsertAnimeRoute from "./routes/anime/insertAnime";
import 'dotenv/config';
import Routes from './routes'

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

Routes.forEach((route) => {
    app.use('/', route);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);

    try {
        await sequelize.sync({ force: true, benchmark: true }); // Change to false when in production
        console.log("Database synced");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
});
