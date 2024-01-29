import { JWT_SECRET } from "../utils/constants.js";
import jwt from 'jsonwebtoken'


export const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    try {
        jwt.verify(token, JWT_SECRET)
        next()
    } catch (error) {
        console.log(error)
        return res.status(401).json({ message: "Unauthorized!" });
    }
}