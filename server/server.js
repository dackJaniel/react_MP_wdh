import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { getPosts } from "./controller/postController.js";

dotenv.config();
const PORT = process.env.DB_PORT;
const server = express();

// midd
server.use(express.json());
server.use(
  cors({ origin: ["http://localhost:5173", "http://127.0.0.1:5173"] })
);

// route
server.get("/posts", getPosts);

server.listen(PORT, async () => {
  mongoose
    .connect(process.env.DB_KEY, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: true,
    })
    .then((res) => {
      console.log("DB conn");
    })
    .catch((err) => {
      console.log(err);
    });
});
