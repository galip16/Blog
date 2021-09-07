import dotenv from "dotenv";
dotenv.config();

import artsRouter from "./router/arts.js";

import db from "./lib/database.js";

db.init();

import express from "express";
const server = express();

server.listen(process.env.PORT, () => {
    console.log(`server listening on Port ${process.env.PORT}`);
});


server.use(express.json());
server.use(express.urlencoded({ extended: true }));


server.use("/arts", artsRouter);