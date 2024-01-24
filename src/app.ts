import express from "express";
import imageRouter from "./routes/images";
import 'dotenv/config'

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(imageRouter);

app.listen(PORT, () => {
    console.log("Server listening on port: " + PORT);
});