import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { blogsData } from "../blog/Blogs";
import { BlogCard } from "../blog/Blogs";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const Blogs = () => {
  return (
    <section>
      <div className="max-w-[1140px] mx-auto p-2.5 text-[18px] text-center text-black font-raleway mb-4">
        <h2 className=" font-bebas text-[45px] tracking-[1px] font-bold mb-8">
          Blogs
        </h2>
        <Carousel
          className="p-2.5"
          swipeable
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "desktop"]}
        >
          {blogsData.map((t, i) => {
            return (
              <BlogCard
                image={t.image}
                key={i}
                title={t.title}
                preview={t.preview}
                id={t.id}
              />
            );
          })}
        </Carousel>
        {/* <div className="grid grid-cols-1 tab:grid-cols-2 lg:grid-cols-3 gap-4"></div> */}
        <div className="">
          <Link to={"/blog"}>know more &gt;</Link>
        </div>
      </div>
    </section>
  );
};
export default Blogs;
