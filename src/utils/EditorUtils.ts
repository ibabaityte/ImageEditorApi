import { Request } from "express";
import { cropOptions } from "../interfaces/interfaces";
import { ParamsDictionary } from "express-serve-static-core";
import { v4 as uuidv4 } from 'uuid';
import os from "os";
import path from "path";

export class EditorUtils {
    static convertParamsToNumbers = (obj: ParamsDictionary): cropOptions => {
        let convertedParams: cropOptions = {} as cropOptions;

        Object.entries(obj).forEach(([key, value]) => {
            convertedParams[key as keyof cropOptions] = +value;
        });

        return convertedParams;
    };

    static generateUniqueFileName = (req: Request): string => {
        const downloadsDirectory = path.join(os.homedir(), 'Downloads');
        const imgName = req.file?.originalname.split(".")[0];
        const imgExtension = req.file?.originalname.split(".")[1];
        const uniqueUuid = uuidv4();
        return `${downloadsDirectory}\\${imgName}-${uniqueUuid}.${imgExtension}`;
    };
}