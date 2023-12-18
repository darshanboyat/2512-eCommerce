import { Blog } from "../../../schema/blogs";
import Order from "../../../schema/orders";
import { connection } from "../../../utils/database";

export default async function uploadBlog(req, res) {
  try {
    connection();

    const { title, bloghtml, blogsummary } = req.body; // Assuming you pass the new status in the request body

    // Find the order by ID and update its status
    const blogData = new Blog({
      title,
      bloghtml,
      blogsummary
    });

    const savedBlog = await blogData.save();
    res.status(200).json({
      error: false,
      success: true,
      blog: savedBlog,
      message: "Blog Uploaded successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}
