import { Model, DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
    class Genre extends Model {
        public id!: number;
        public name!: string;
        public readonly createdAt!: Date;
        public readonly updatedAt!: Date;
    }

    Genre.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
        },
        {
            sequelize,
            tableName: "genres",
        }
    );
    return Genre;
};
