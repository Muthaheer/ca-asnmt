
import express from 'express';
import { login, signup } from '../controllers/users.controller.js';
import { body, check } from 'express-validator';
import { validate } from '../utils/helper.js';

const userRouter = express.Router();

userRouter.post('/signup', [
    check('email').trim().isEmail().withMessage("Email Required"),
    check('password').trim().isLength({min: 6}).withMessage("Password must have atleast 6 character"),
    validate
], signup);

userRouter.post('/login', [
    body('email').trim().isEmail(),
    body('password').isLength({min: 6}),
    validate
], login)

export default userRouter;
