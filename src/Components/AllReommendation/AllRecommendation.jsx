import { useEffect, useState } from "react";
import axios from "axios";

const AllRecommendation = ({ detailsData }) => {
  const { _id: query_id } = detailsData;
  const [allRecommendations, setAllRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/all-recommendations?query_id=${query_id}`
        );
        setAllRecommendations(data);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };
    fetchRecommendations();
  }, [query_id]);

  return (
    <div className="mt-32">
      <h1 className="text-2xl mt-10 font-bold text-[#728181]">
        All Recommendations
      </h1>
      <div className="mt-5 space-y-4">
        {allRecommendations.length === 0 ? (
          <p className="text-gray-500">No recommendations found.</p>
        ) : (
          allRecommendations.map((recommend, index) => (
            <div
              key={index}
              className="flex items-start p-4 border-b border-gray-300"
            >
              <img
                src={recommend.recommendedProductImage}
                alt="Recommender"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-semibold text-gray-800">
                    {recommend.recommenderName}
                  </p>
                </div>

                <p className="text-gray-800">
                    {recommend.recommenderEmail}
                  </p>
                <p className="text-gray-700 mt-1">
                  <span className="font-medium">Reason:</span>{" "}
                  {recommend.recommendationReason}
                </p>

                <div className="mt-2 text-sm text-gray-600">
                  <p>
                    <span className="font-medium">Recommended Product:</span>{" "}
                    {recommend.recommendedProductName}
                  </p>
                  <p>
                    <span className="font-medium">Title:</span>{" "}
                    {recommend.recommendationTitle}
                  </p>
                  <p>
                    <span className="font-medium text-gray-500">Date:</span>
                    {new Date(recommend.currentDate).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllRecommendation;
