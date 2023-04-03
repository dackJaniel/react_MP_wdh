import postSchema from "../model/postModel.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await postSchema.find({});
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(400).json("Fehler!!");
  }
};
