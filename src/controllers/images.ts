import { RequestHandler } from "express";
import { EditorUtils } from "../utils/EditorUtils";
import Jimp from "jimp";

export const cropImage: RequestHandler = (req, res) => {
    Jimp.read(req.file!.buffer)
        .then((image) => {
            let newImg = image.clone();
            const fileName = EditorUtils.generateUniqueFileName(req);
            const { x, y, height, width } = EditorUtils.convertParamsToNumbers(req.params);

            newImg.crop(x, y, height, width);
            newImg.write(fileName);
            res.status(200).send({ message: "Image has been saved to: " + fileName });
        })
        .catch(err => {
            console.log(err.message);
            res.status(500).send({ err: err.message });
        });
};