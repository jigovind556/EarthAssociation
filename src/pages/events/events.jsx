import { useParams } from "react-router-dom";
import { eventImages } from "../../assets/events/eventImages";
// import eventData from "./eventData.json"; // Assume your JSON data is in this file

const eventData = [
  {
    id: "wildlife-week-2024",
    title: "Wildlife Week 2024",
    "posterUrl": eventImages.wildlifeWeekImage,
    description:
      "World Wildlife Week will be celebrated from 2 to 8 October 2024. The main objective is to promote conservation and protection of animal life, encouraging people to save animals from being killed for food or other purposes.",
    schedule: [
      {
        date: "02-10-2024",
        time: "08:00 AM",
        activity: "Grand Inauguration Ceremony",
        venue: "Nahargarh Biological Park",
      },
      {
        date: "05-10-2024",
        time: "09:00 AM",
        activity:
          "Rangoli Making, Poster Making, Trekking, Free Zoo Visit, Face Painting, Photo Exhibition",
        venue: "Jaipur Zoo, Ram Niwas Garden",
      },
      {
        date: "07-10-2024",
        time: "10:00 AM",
        activity: "Inter-School & College Painting Competition",
        venue: "Individual School Premises & Online",
      },
    ],
    rules:
      "The topic for all is based on wildlife conservation. Students participating in the online competition can upload paintings, photographs, short movies, slogans related to wildlife conservation, love for wildlife, threats to wildlife, and tips to protect them. The message of wildlife conservation must be shared online by midnight of 7 October.",
    contact: "8829012209, 7014002032",
  },
];

const Events = () => {
  const params = useParams();
  const { eventId } = params;

  // Find the event data using the eventId
  const event = eventData.find((e) => e.id === eventId);

  return (
    <main className="my-[65px] px-10">
      <section className="max-w-[1140px] mx-auto p-2.5 mt-20 mb-8 text-[18px] text-black font-raleway min-h-[90vh]">
        {event ? (
          <>
            <div className="flex flex-col-reverse md:flex-row justify-between items-start mb-6">
              <div className="w-full text-wrap">
                <h1 className="text-4xl font-bold text-[#1f693a] mb-6">
                  {event.title}
                </h1>
                <p className="text-xl text-[#4c4d4c] mb-6">
                  {event.description}
                </p>
                <div className="mt-8 text-left">
                  <h2 className="text-3xl font-bold mb-4">Schedule</h2>
                  <ul className="list-disc pl-5 text-[#4c4d4c] mb-8">
                    {event.schedule.map((activity, index) => (
                      <li key={index} className="mb-2">
                        <strong>
                          {activity.date} - {activity.time}:
                        </strong>{" "}
                        {activity.activity} at {activity.venue}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">
                      Additional Information
                    </h2>
                    <p>{event.rules}</p>
                  </div>
                  <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Contact</h2>
                    <p>{event.contact}</p>
                    <p>{event.rules}  </p>
                  </div>
                </div>
              </div>
              {event.posterUrl && (
                <div className="w-full md:w-1/3 h-auto  mb-6 md:mb-0 md:ml-6">
                  <img
                    src={event.posterUrl}
                    alt={`${event.title} Poster`}
                    className="w-full h-full object-contain rounded-lg shadow-md"
                  />
                </div>
              )}
            </div>
          </>
        ) : (
          <p>Event not found.</p>
        )}
      </section>
    </main>
  );
};

export default Events;
