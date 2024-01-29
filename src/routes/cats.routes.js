
import express from 'express';
import { upload, validate } from '../utils/helper.js';
import { deleteCatImageById, getCatImageById, getCatImageIds, updateCatImageById, uploadCatImage } from '../controllers/cats.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';
import { body, param, } from 'express-validator';


const catRouter = express.Router();

catRouter.get('/', authenticate, getCatImageIds);

catRouter.post('/',authenticate, upload.any(), uploadCatImage);

catRouter.get('/:id', [
    param('id').isUUID().withMessage('Correct ID is required'),
    validate
], authenticate, getCatImageById);

catRouter.put('/:id', [
    param('id').isUUID().withMessage('Correct ID is required'),
    validate
], authenticate, upload.any(), updateCatImageById);


catRouter.delete('/:id', [
    param('id').isUUID().withMessage('Correct ID is required'),
    validate
], authenticate, deleteCatImageById);

export default catRouter;
