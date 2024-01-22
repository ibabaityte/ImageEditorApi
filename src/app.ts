import express from "express";
import {json} from "body-parser";
import 'dotenv/config'

const PORT = process.env.PORT;
const app = express();

app.use(json());

app.listen(PORT, () => {
    console.log("Server listening on port: " + PORT);
});