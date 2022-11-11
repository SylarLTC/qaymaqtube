import express from "express";
import {
  addComment,
  deleteComment,
  getComments,
} from "../controllers/comment.js";
import { verifyToken } from "../verifyToken.js";

export const commentRoutes = express.Router();

commentRoutes.post("/", verifyToken, addComment);
commentRoutes.delete("/:id", verifyToken, deleteComment);
commentRoutes.get("/:videoId", getComments);
