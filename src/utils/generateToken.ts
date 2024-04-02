import jwt from "jsonwebtoken";

const generateToken = (payload: string | Buffer | object, secretOrPrivateKey: jwt.Secret, options?: jwt.SignOptions): string => {
    return jwt.sign(payload, secretOrPrivateKey, options);
};

export default generateToken;
