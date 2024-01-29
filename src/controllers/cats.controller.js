
import {unlinkSync, renameSync} from 'fs';
import{ join, resolve } from 'path';


//save [{filename,extension}]
const catPics = {}

export const getCatImageIds = (req, res) => {
    if (Object.keys(catPics).length > 0) {
        res.json({
            ids: Object.keys(catPics)
        })
    } else {
        res.json({
            message: `No cat pics were not found`
        })
    }
}

export const uploadCatImage = (req, res) => {
    const filename = req.files[0].filename

    catPics[filename.split('.')[0]] = filename.split('.')[1]

    const resObj = {
        message: "Image upload success",
        id: filename.split('.')[0]
    };

    res.status(201).json(resObj);
};

export const getCatImageById = (req, res) => {
    const id = req.params.id;

    if (id in catPics) {
        res.sendFile(resolve('tmp/uploads/', `${id}.${catPics[id]}`));
    } else {
        res.status(404).json({ message: `Cat pic with ${id} not found` });
    }
}

export const updateCatImageById = (req, res) => {
    const id = req.params.id;
    if (id in catPics) {
        const oldFilename = `${id}.${catPics[id]}`;
        const newFilename = req.files[0].filename;

        catPics[id] = newFilename.split('.')[1]
        unlinkSync(join('tmp/uploads/', oldFilename));
        renameSync(join('tmp/uploads/', newFilename), join('tmp/uploads/', oldFilename))

        res.json({
            message: `FIle update successful with id : ${id}`
        });
    } else {
        res.status(404).json({ message: `Cat pic with ${id} not found` });
    }
}


export const deleteCatImageById = (req, res) => {
    const id = req.params.id;

    if (id in catPics) {
        const filename = `${id}.${catPics[id]}`;
        delete catPics[id];
        unlinkSync(join('tmp/uploads/', filename));
        res.json({
            message: `Image with ${id} successfully deleted `
        })
    } else {
        res.status(404).json({ message: `Cat pic with ${id} not found` });
    }
}
