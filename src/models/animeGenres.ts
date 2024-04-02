import { Model, DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
    class AnimeGenres extends Model {
        public animeId!: number;
        public genreId!: number;
    }

    AnimeGenres.init(
        {
            animeId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            genreId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
        },
        {
            sequelize,
            tableName: "anime_genres",
            timestamps: false,
        }
    );

    return AnimeGenres;
};
