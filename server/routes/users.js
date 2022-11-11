import express from "express";
import {
  deleteUser,
  update,
  getUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

export const userRoutes = express.Router();

// update a user
userRoutes.put("/:id", verifyToken, update);

// delete a user
userRoutes.delete("/:id", verifyToken, deleteUser);

// get a user
userRoutes.get("/find/:id", getUser);

// subscribe a user
userRoutes.put("/sub/:id", verifyToken, subscribe);

// unsubscribe a user
userRoutes.put("/unsub/:id", verifyToken, unsubscribe);

// like video
userRoutes.put("/like/:videoId", verifyToken, like);

// dislike video
userRoutes.put("/dislike/:videoId", verifyToken, dislike);
