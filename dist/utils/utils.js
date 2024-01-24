"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorUtils = void 0;
// export const convertParamsToNumbers = (obj: ParamsDictionary): cropOptsInterface => {
//     let convertedParams: cropOptsInterface = {} as cropOptsInterface;
//     Object.entries(obj).forEach(([key, value]) => {
//         convertedParams[key as keyof cropOptsInterface] = +value;
//     });
//     return convertedParams;
// };
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
