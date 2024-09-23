import React, { useState } from "react";
import RGallery from "react-photo-gallery";
import { photos } from "../../assets/wildlifeWeek/photos";
import { photos as photos2 } from "../../assets/newspaperCuttings/photos";

const Gallery = () => {
  // State to control "see more" functionality
  const [seeMoreWildlife, setSeeMoreWildlife] = useState(false);
  const [seeMoreNewspaper, setSeeMoreNewspaper] = useState(false);

  return (
    <main className="my-[65px]">
      <section className="mx-auto max-w-[1140px]">
        {/* Wildlife Week Section */}
        <h1 className="text-center text-[#333] font-raleway font-bold text-[36px] lg:text-[48px]">
          Gallery
        </h1>
        <div className="relative">
          {/* Gallery with gradient overlay */}
          <div
            className={`relative overflow-hidden transition-all duration-500 ${
              seeMoreWildlife ? "max-h-[100%]" : "max-h-[400px]"
            }`}
          >
            <RGallery photos={photos} />
          </div>

          {/* Gradient Overlay */}
          {!seeMoreWildlife && (
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
          )}

          {/* See More Button */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => setSeeMoreWildlife(!seeMoreWildlife)}
              className="px-6 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition duration-300"
            >
              {seeMoreWildlife ? "See Less" : "See More"}
            </button>
          </div>
        </div>

        {/* Newspaper Cuttings Section */}
        <h1 className="text-center text-[#333] font-raleway font-bold text-[36px] lg:text-[48px] mt-12">
          Newspaper Cuttings
        </h1>
        <div className="relative">
          {/* Gallery with gradient overlay */}
          <div
            className={`relative overflow-hidden transition-all duration-500 ${
              seeMoreNewspaper ? "max-h-[100%]" : "max-h-[400px]"
            }`}
          >
            <RGallery photos={photos2} />
          </div>

          {/* Gradient Overlay */}
          {!seeMoreNewspaper && (
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
          )}

          {/* See More Button */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => setSeeMoreNewspaper(!seeMoreNewspaper)}
              className="px-6 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition duration-300"
            >
              {seeMoreNewspaper ? "See Less" : "See More"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
