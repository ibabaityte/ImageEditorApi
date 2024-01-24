"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorUtils = void 0;
const uuid_1 = require("uuid");
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
class EditorUtils {
}
exports.EditorUtils = EditorUtils;
EditorUtils.convertParamsToNumbers = (obj) => {
    let convertedParams = {};
    Object.entries(obj).forEach(([key, value]) => {
        convertedParams[key] = +value;
    });
    return convertedParams;
};
EditorUtils.generateUniqueFileName = (req) => {
    var _a, _b;
    const downloadsDirectory = path_1.default.join(os_1.default.homedir(), 'Downloads');
    const imgName = (_a = req.file) === null || _a === void 0 ? void 0 : _a.originalname.split(".")[0];
    const imgExtension = (_b = req.file) === null || _b === void 0 ? void 0 : _b.originalname.split(".")[1];
    const uniqueUuid = (0, uuid_1.v4)();
    return `${downloadsDirectory}\\${imgName}-${uniqueUuid}.${imgExtension}`;
};
