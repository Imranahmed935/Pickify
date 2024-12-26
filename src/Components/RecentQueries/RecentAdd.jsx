import React from "react";
import { Link } from "react-router-dom";

const RecentAdd = ({ recent }) => {
  const { _id, productName, productBrand, recommendationCount, productULR } =
    recent;
  return (
    <div className="card card-compact transition-all duration-300 hover:scale-105 bg-base-100 w-96 border border-[#728181]">
      <figure>
        <img className="w-96 h-60" src={productULR} alt="Shoes" />
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
          <Link to={`/Queries_Details/${_id}`}>
            <button className="btn bg-[#004581] text-white hover:text-[#004581]">Recommended</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentAdd;
