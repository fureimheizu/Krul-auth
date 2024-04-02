import { Sequelize } from "sequelize";
import setupUserModel from "./user";
import setupAnimeModel from "./anime";
import setupGenresModel from "./genres";
import setupUserAnimesModel from "./userAnime";
import setupAnimeGenresModel from "./animeGenres";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
});

const User = setupUserModel(sequelize);
const Anime = setupAnimeModel(sequelize);
const Genres = setupGenresModel(sequelize);
const UserAnimes = setupUserAnimesModel(sequelize);
const AnimeGenres = setupAnimeGenresModel(sequelize);

User.belongsToMany(Anime, { through: UserAnimes, foreignKey: "userId" });
Anime.belongsToMany(User, { through: UserAnimes, foreignKey: "animeId" });
Anime.belongsToMany(Genres, { through: AnimeGenres, foreignKey: "animeId" });
Genres.belongsToMany(Anime, { through: AnimeGenres, foreignKey: "genreId" });

export { sequelize, User, Anime, Genres, UserAnimes, AnimeGenres };
