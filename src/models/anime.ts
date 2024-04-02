import { Model, DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
    class Anime extends Model {
        public id!: number;
        public title!: string;
        public genres!: string[]; // Updated field: genres
        public rating!: number;
        public releaseYear!: number; // New field: release year
        public episodes!: number; // New field: number of episodes
        public studio!: string; // New field: studio
        public currentEpisode!: number | null; // New field: current episode
        public coverImage!: string | null; // New field: cover image
        public episodeDates!: Date[] | null; // New field: episode dates
        public readonly createdAt!: Date;
        public readonly updatedAt!: Date;
    }

    Anime.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: false,
                validate: {
                    isString(value: string) {
                        if (typeof value !== "string") {
                            throw new Error("Title must be a string");
                        }
                    }
                }
            },
            genres: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: true,
            },
            rating: {
                type: DataTypes.FLOAT,
                allowNull: true,
                validate: {
                    isFloat: true,
                    min: 0,
                    max: 10,
                }
            },
            releaseYear: {
                type: DataTypes.INTEGER,
                allowNull: true,
                validate: {
                    isInt: true,
                }
            },
            episodes: {
                type: DataTypes.INTEGER,
                allowNull: true,
                validate: {
                    isInt: true,
                    min: 1,
                }
            },
            studio: {
                type: DataTypes.STRING,
                allowNull: true,
                validate: {
                    notEmpty: true,
                }
            },
            currentEpisode: {
                type: DataTypes.INTEGER,
                allowNull: true,
                validate: {
                    isInt: true,
                    min: 1,
                }
            },
            coverImage: {
                type: DataTypes.STRING,
                allowNull: true,
                validate: {
                    isUrl: true,
                }
            },
            episodeDates: {
                type: DataTypes.ARRAY(DataTypes.DATEONLY),
                allowNull: true,
            },
        },
        {
            sequelize,
            tableName: "animes",
        }
    );
    return Anime;
};
