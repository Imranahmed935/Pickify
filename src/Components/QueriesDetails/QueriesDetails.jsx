import React from "react";
import { useLoaderData } from "react-router-dom";

const QueriesDetails = () => {
  const detailsData = useLoaderData();

  const {
    productName,
    boycott,
    queryTitle,
    currentDate,
    productBrand,
    recommendationCount,
    productULR,
    userEmail,
    userName,
    userPhoto,
  } = detailsData;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-[#728181]">Query Details</h1>

      <div className="bg-white border rounded-lg overflow-hidden border-[#92a4a4] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-full object-cover"
            src={productULR}
            alt={productName}
          />
        </div>

        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-xl font-semibold mb-6 text-gray-700">
            Product Details
          </h2>
          <ul className="space-y-4">
            <li>
              <strong>Query Title:</strong> {queryTitle}
            </li>
            <li>
              <strong>Product Name:</strong> {productName}
            </li>
            <li>
              <strong>Brand:</strong> {productBrand}
            </li>
            <li>
              <strong>Recommendation Count:</strong> {recommendationCount}
            </li>
            <li>
              <strong>Boycott Status:</strong> {boycott}
            </li>
            <li>
              <strong>Created On:</strong>{" "}
              {new Date(currentDate).toLocaleDateString()}
            </li>
          </ul>
          <div className="flex items-center mt-10">
            <img
              className="w-14 h-14 rounded-full border-2 border-gray-300"
              src={userPhoto}
            />
            <div className="ml-4">
              <p className="text-lg font-semibold">{userName}</p>
              <p className="text-sm text-gray-600">{userEmail}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueriesDetails;
