import { DataTypes, Model, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
    class UserAnime extends Model {
        public userId!: number;
        public animeId!: number;
    }

    UserAnime.init(
        {
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            animeId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
        },
        {
            sequelize,
            modelName: "UserAnime",
            tableName: "user_anime",
            timestamps: false,
        }
    );

    return UserAnime;
};
