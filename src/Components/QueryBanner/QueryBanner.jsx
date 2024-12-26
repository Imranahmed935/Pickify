import React from "react";
import banner from "../../assets/banner/organic.png";
import { Link } from "react-router-dom";

const QueryBanner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-green-200 to-green-500 px-10 ">
      <div className="md:w-1/2 text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Find Your Perfect Product
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Explore top recommendations tailored to your needs. Whether it's for
          daily essentials or exclusive finds, we’ve got you covered!
        </p>
        <Link to={'/addQueries'}><button className="btn bg-[#004581] hover:text-black text-white border-none font-bold py-3 px-8 rounded-full">
          Add Queries
        </button></Link>
      </div>
      <div className="md:w-2/4 mt-10 md:mt-0">
        <img className="w-full h-auto rounded-lg" src={banner} alt="Organic Products" />
      </div>
    </div>
  );
};

export default QueryBanner;
