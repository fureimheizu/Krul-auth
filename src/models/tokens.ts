import { Model, DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
    class TokensBlacklist extends Model {
        public id!: number;
        public token!: string;
        public readonly createdAt!: Date;
        public readonly updatedAt!: Date;
    }

    TokensBlacklist.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            token: {
                type: DataTypes.STRING,
            }
        },
        {
            sequelize,
            tableName: "tokens_blacklist",
        }
    );
    return TokensBlacklist;
};
