
import multer from 'multer';
import uuid4 from 'uuid4';
import path from 'path';
import { validationResult } from 'express-validator';

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'tmp/uploads')
  },
  filename: function (req, file, cb) {
    const filename = uuid4()
    cb(null, `${filename}${path.extname(file.originalname)}`)
  }
})


export const upload = multer({
  storage,
  fileFilter: function (req, file, callback) {
    //console.log(file)
    
    var ext = path.extname(file.originalname);
    if (file.fieldname !== 'image') {
      const err = new Error(JSON.stringify({
        "errors": [
          {
            "type": "field",
            "msg": "Image is required ",
            "path": "image",
            "location": "body"
          }
        ]
      }))
      err.statusCode = 400
      return callback(err)
    }
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
      const err = new Error('Only images are allowed');
      err.statusCode = 400
      return callback(err)
    }
    callback(null, true)
  },


})

