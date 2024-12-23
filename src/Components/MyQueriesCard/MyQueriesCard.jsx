import React from 'react';
import { Link } from 'react-router-dom';

const MyQueriesCard = ({queries}) => {
    const { _id, productName, productBrand, recommendationCount, productULR } = queries;
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
        <div className="card-actions justify-center ">
       
          <Link to={`/Queries_Details/${_id}`}><button className="btn bg-[#c3c9c9]">view Details</button> </Link>
          <button className="btn bg-[#c3c9c9]">update</button>
          <button className="btn bg-[#c3c9c9]">Delete</button>
        </div>
      </div>
    </div>
    );
};

export default MyQueriesCard;