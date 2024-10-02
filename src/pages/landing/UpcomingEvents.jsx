import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { eventImages } from "../../assets/events/eventImages";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Wildlife Week Celebration",
      image: eventImages.wildlifeWeekImage,
      date: "October 1st – 7th, 2024",
      path: "/events/wildlife-week-2024",
    },
    // {
    //   id: 2,
    //   title: "Techno Fest",
    //   date: "Date to be Announced",
    //   path: "/events/techno-fest",
    // },
    // {
    //   id: 3,
    //   title: "Earth Hour",
    //   date: "March 2025",
    //   path: "/events/earth-hour",
    // },
    // {
    //   id: 4,
    //   title: "Climate Action Summit",
    //   date: "2025",
    //   path: "/events/climate-action-summit",
    // },
  ];

  return (
    <section className="max-w-[1140px] mx-auto p-2.5 mt-20 mb-8 text-center text-black font-raleway flex flex-col justify-center align-middle">
      <h2 className="font-bebas text-[45px] tracking-[1px] font-bold mb-8 uppercase">
        Upcoming Events
      </h2>
      <Carousel
        className="p-2.5"
        containerClass="max-w-[1140px] w-[80%] lg:w-full self-center"
        swipeable
        autoPlay
        autoPlaySpeed={2000}
        responsive={responsive}
        keyBoardControl
        minimumTouchDrag={80}
        rewind
        rewindWithAnimation
        pauseOnHover
        showDots={false}
        focusOnSelect={true}
        draggable={true}
        removeArrowOnDeviceType={["tablet", "desktop", "mobile"]}
      >
        {events.map((event) => (
          <UpcomingEventsCard
            key={event.id}
            title={event.title}
            date={event.date}
            path={event.path}
            image={event.image}
          />
        ))}
      </Carousel>
    </section>
  );
};

export default UpcomingEvents;

const UpcomingEventsCard = ({ title, date, path, image }) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg bg-[#f3f2f3] p-5 flex flex-col md:flex-row md:items-center">
      <Link
        to={path}
        className="flex flex-col md:flex-row md:items-center w-full"
      >
        {/* Image */}
        <div className="md:w-1/2 w-full mb-4 md:mb-0">
          <img
            src={image}
            alt={title}
            className="w-full h-80 center object-cover rounded"
          />
        </div>
        {/* Text Section */}
        <div className="md:ml-5 w-full text-center md:text-left">
          <h3 className="text-[24px] font-semibold uppercase tracking-wide mb-2 font-raleway">
            {title}
          </h3>
          <p className="text-[16px] tracking-wider">{date}</p>
          <p className="mt-5 text-pgreen">Click to know more</p>
        </div>
      </Link>
    </div>
  );
};