import React from 'react';

import img1 from '../../assets/slider/pic5.avif';
import img2 from '../../assets/slider/pic7.avif';
import img3 from '../../assets/slider/pic1.jpg';
import img4 from '../../assets/slider/pic2.jpg';
import img5 from '../../assets/slider/pic4.avif';
import img6 from '../../assets/slider/pic6.avif';
import img7 from '../../assets/slider/1221.jpg';
import img8 from '../../assets/slider/200.webp';

const Trend = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div className="mt-10 px-4 lg:w-9/12 mx-auto">
      <h1 className="text-2xl font-bold text-[#004581] mb-6">
        Trending Now
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <img
              src={image}
              alt={`Trending Product ${index + 1}`}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trend;
