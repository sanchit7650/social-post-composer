import Post from "../models/Post.js";

// Create Post
export const createPost = async (req, res) => {
  try {
    const { title, content, platforms } = req.body;

    const post = await Post.create({
      title,
      content,
      platforms,
      image: "",
      video: "",
      user: req.user.id,
    });

    res.status(201).json({
      message: "Post Created Successfully",
      post,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("user", "username email");

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};