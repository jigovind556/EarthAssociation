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
    <main className="mt-20 px-4 md:px-8 pb-8  min-h-screen">
      <div className="max-w-3xl mx-auto pt-4">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        {/* <div className="relative flex justify-center h-[300px] tab:h-[300px]"> */}
        <img
          src={blog.image}
          alt=""
          className="w-auto min-w-[250px] float-right ml-4 my-6 h-[300px] center object-cover brightness-75 bg-black z-0 rounded-xl"
        />
        {/* </div> */}
        <div className="text-lg">{blog.content}</div>
      </div>
    </main>
  );
};

export default BlogPost;
