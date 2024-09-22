import React from 'react';

const Gallery = () => {
  return (
    <main className="my-[65px]">
        <section className="mx-auto max-w-[1140px]">
            <h1 className="text-center text-[#333] font-raleway font-bold text-[36px] lg:text-[48px]">
            Gallery
            </h1>
            <div className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <div className="bg-[#FFF000] h-[300px]"></div>
            <div className="bg-[#FFF000] h-[300px]"></div>
            <div className="bg-[#FFF000] h-[300px]"></div>
            <div className="bg-[#FFF000] h-[300px]"></div>
            <div className="bg-[#FFF000] h-[300px]"></div>
            <div className="bg-[#FFF000] h-[300px]"></div>
            </div>
        </section>
    </main>
  );
}

export default Gallery;
