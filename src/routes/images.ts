import Router from "express";
import multer from "multer";
import { cropImage } from "../controllers/images";

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/edit/crop/:x/:y/:width/:height", upload.single("image"), cropImage);

export default router;