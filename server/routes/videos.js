import express from "express";
import {
  addVideo,
  addView,
  deleteVideo,
  getByTag,
  getVideo,
  randomVideo,
  search,
  sub,
  trend,
  updateVideo,
} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

export const videoRoutes = express.Router();

// create a video
videoRoutes.post("/", verifyToken, addVideo);

// update a video
videoRoutes.put("/:id", verifyToken, updateVideo);

// delete a video
videoRoutes.delete("/:id", verifyToken, deleteVideo);

// get a video
videoRoutes.get("/find/:id", getVideo);

videoRoutes.put("/view/:id", addView);
videoRoutes.get("/trend", trend);
videoRoutes.get("/random", randomVideo);
videoRoutes.get("/sub", verifyToken, sub);
videoRoutes.get("/tags", getByTag);
videoRoutes.get("/search", search);
