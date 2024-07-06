import { useParams } from "react-router-dom";
import { blogsData } from "./Blogs";

const BlogPost = () => {
  const params = useParams();
  const { blogId } = params;

  // Find the blog post based on blogId
  const blog = blogsData.find((blog) => blog.id.toString() === blogId);

  if (!blog) {
    // Handle case where blog post is not found
    return <div className="text-center mt-8">Blog post not found!</div>;
  }

  console.log(blog);
  return (
    <main className="mt-20 px-4 md:px-8 mb-8">
      <section className="max-w-3xl mx-auto pt-4 min-h-[79vh]">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        {blog.content}
      </section>
    </main>
  );
};

export default BlogPost;
