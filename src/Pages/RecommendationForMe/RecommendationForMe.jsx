import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const RecommendationsForMe = () => {
  const { user, loading } = useContext(AuthContext);
  const [RecommendationsForMe, setRecommendationsForMe] = useState([]);
  useEffect(() => {
    const allMyQueries = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/recommendation-for-me/${user?.email}`
        );
        setRecommendationsForMe(data);
      } catch (err) {
        console.log(err);
      }
    };
    allMyQueries();
  }, [user]);

  if (loading) {
    return (
      <span className="loading loading-spinner text-success relative top-52 ml-[900px] "></span>
    );
  }
  return (
    <div className="p-6 lg:w-9/12 mx-auto min-h-screen">
      <h1 className="text-2xl font-semibold text-[#004581] mb-6">
        Recommendations for me
      </h1>
      <div className="overflow-x-auto bg-white rounded-lg">
        <table className="min-w-full table-auto text-gray-700">
          <thead className="bg-gray-200 text-black">
            <tr>
              <th className="py-3 px-6 text-left border-b border-gray-300">
                Recommendation Image
              </th>
              <th className="py-3 px-6 text-left border-b border-gray-300">
                Recommendation Title
              </th>
              <th className="py-3 px-6 text-left border-b border-gray-300">
                Product Name
              </th>
              <th className="py-3 px-6 text-left border-b border-gray-300">
                Reason
              </th>
            </tr>
          </thead>
          <tbody>
            {RecommendationsForMe.map((rec) => (
              <tr key={rec._id} className="border-b hover:bg-gray-100">
                <td className="py-4 px-6 border-b">
                  <img
                    className="w-16 h-16"
                    src={rec.recommendedProductImage}
                    alt=""
                  />
                </td>
                <td className="py-4 px-6 border-b">
                  {rec.recommendationTitle}
                </td>
                <td className="py-4 px-6 border-b">
                  {rec.recommendedProductName}
                </td>
                <td className="py-4 px-6 border-b">
                  {rec.recommendationReason}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecommendationsForMe;
