import express from "express";
import artsController from "../controller/artsController.js";

const router = express.Router();


router.get("/", artsController.readAll);
router.post("/", artsController.createArt);

export default router;

