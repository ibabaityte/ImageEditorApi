"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
require("dotenv/config");
const PORT = process.env.PORT;
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.listen(PORT, () => {
    console.log("Server listening on port: " + PORT);
});
