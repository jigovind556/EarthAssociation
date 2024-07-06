import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { blogsData } from "../blog/Blogs";

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
              />
            );
          })}
        </Carousel>
        {/* <div className="grid grid-cols-1 tab:grid-cols-2 lg:grid-cols-3 gap-4"></div> */}
        <div className="">
          <a className="text-pgreen " href="">
            know more &gt;
          </a>
        </div>
      </div>
    </section>
  );
};
export default Blogs;

const BlogCard = ({ image, title, preview }) => {
  return (
    <div className="text-start bg-[#f3f2f3] mx-3 rounded-b-lg overflow-clip">
      <div>
        <img
          src={image || ""}
          alt=""
          className="bg-black cover w-full h-[250px] shadow-md shadow-black/50"
        />
      </div>
      <div className="px-[50px] pb-10 pt-4 flex flex-col gap-4">
        <div className="text-[17px] font-raleway font-bold tracking-wider">
          {title}
        </div>
        <div className="text-[14px] font-raleway">{preview}</div>
      </div>
    </div>
  );
};
