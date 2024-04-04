import { Model, DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
    class User extends Model {
        public id!: number;
        public name!: string;
        public email!: string;
        public password!: string;
        public readonly createdAt!: Date;
        public readonly updatedAt!: Date;
    }

    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    is: {
                        args: /^[a-z0-9]+$/i,
                        msg: "The name must contain only letters and numbers",
                    },
                    len: {
                        args: [4, 30],
                        msg: "The name length should be between 4 and 30 characters",
                    },
                },
                unique: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: {
                        msg: "Invalid email address",
                    },
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "users",
        }
    );
    return User;
};
