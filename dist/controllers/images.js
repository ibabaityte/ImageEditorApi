"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cropImage = void 0;
const EditorUtils_1 = require("../utils/EditorUtils");
const jimp_1 = __importDefault(require("jimp"));
const cropImage = (req, res) => {
    jimp_1.default.read(req.file.buffer)
        .then((image) => {
        let newImg = image.clone();
        const fileName = EditorUtils_1.EditorUtils.generateUniqueFileName(req);
        const { x, y, height, width } = EditorUtils_1.EditorUtils.convertParamsToNumbers(req.params);
        newImg.crop(x, y, height, width);
        newImg.write(fileName);
        res.status(200).send({ message: "Image has been saved to: " + fileName });
    })
        .catch(err => {
        console.log(err.message);
        res.status(500).send({ err: err.message });
    });
};
exports.cropImage = cropImage;
