import React from "react";

const AllQueries = ({ query }) => {
  const { productName, productBrand, recommendationCount, productULR } = query;
  return (
    <div className="card card-compact bg-base-100 w-96 border transition-all duration-300 hover:scale-105 border-[#728181]">
      <figure>
        <img
        className="w-96 h-60" 
        src={productULR} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <strong>Product Name</strong>: {productName}
        </h2>
        <h3>
          <strong>Brand</strong>: {productBrand}
        </h3>
        <p>
          <strong>recommendationCount</strong>: {recommendationCount}
        </p>
        <div className="card-actions justify-end">
          <button className="btn bg-[#c3c9c9]">Recommended</button>
        </div>
      </div>
    </div>
  );
};

export default AllQueries;
