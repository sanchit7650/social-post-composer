import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  createPost,
  getPosts,
} from "../controllers/postController.js";

const router = express.Router();

router.post("/", authMiddleware, createPost);
router.get("/", getPosts);

export default router;