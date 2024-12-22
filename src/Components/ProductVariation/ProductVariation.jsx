import React from "react";
import header from "../../assets/slider/header.webp";

const ProductVariation = () => {
  return (
    <div>
      <h1 className="ml-32 text-2xl mt-10 font-bold text-[#728181]">
        Product Variations
      </h1>
      <div className="mt-10 flex flex-col lg:flex-row items-center bg-gradient-to-r from-[#fcfcfc] to-[#84a2a0] lg:text-white text-black p-8 lg:p-10 gap-8 lg:gap-12">

        <div className="lg:w-1/2">
          <img
            className="w-full rounded-lg hover:scale-105 transform transition duration-500"
            src={header}
            alt="Header"
          />
        </div>
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            Discover a World of Possibilities
          </h1>
          <p className="text-lg lg:text-xl">
            Discover a rich collection of post variations, offering creative
            styles, engaging formats, and versatile themes to suit every
            need—perfect for inspiring, informing, and captivating your audience
            effortlessly.
          </p>
          <button className="px-6 py-3 bg-white text-[#728181] font-bold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
            Add Queries
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductVariation;
