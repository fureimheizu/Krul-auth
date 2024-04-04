import { Sequelize } from "sequelize";
import setupUserModel from "./user";
import setupTokensBlacklistModel from "./tokens";
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
const TokensBlacklist = setupTokensBlacklistModel(sequelize);


export { sequelize, User, TokensBlacklist };
