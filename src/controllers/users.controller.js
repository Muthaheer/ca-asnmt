
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../utils/constants.js';

const users = {
    'test@gmail.com' : '$2b$10$R0tGlBaN0Q0sN/HGDZdoauZZM2l8L5vP96Ai/UGHz9Yy/wjYETrJy'
}


export const signup = async (req, res) => {

    const { email, password } = req.body;

    if (email in users) {
        res.status(401).json({ message: 'User Already Exists' })
    } else {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);


            users[email] = hashedPassword
            console.log(users)
            const token = jwt.sign({ email: email }, JWT_SECRET, {
                expiresIn: '1h',
            })

            res.status(201).json({ message: 'User created successfully', token })

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal Server Error' })
        }
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {

        if (email in users) {
            const isPasswordValid = await bcrypt.compare(password, users[email]);

            if (!isPasswordValid) {
                res.status(401).json({ error: 'Invalid login credentials' });
            } else {
                const token = jwt.sign({ email: email }, JWT_SECRET, {
                    expiresIn: '1h',
                })

                res.json({ message: 'Login successful', token })
            }

        } else {
            res.status(401).json({ message: 'Invalid login credentials' });
        }

    } catch (error) {

        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}