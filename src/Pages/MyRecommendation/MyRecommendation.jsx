import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyRecommendation = () => {
  const [recommendations, setRecommendations] = useState([]);
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`https://pickify-server.vercel.app/my-recommendation/${user?.email}`)
      .then((res) => {
        setRecommendations(res.data);
      })
      .catch((error) => {
        toast.error("There was an error fetching the recommendations!", error);
      });
  }, [user]);

  const handleDelete = (id, query_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://pickify-server.vercel.app/delete-recommendation/${id}/${query_id}`
          )
          .then((res) => {
            if (res.data.result.deletedCount > 0) {
              const remainingData = recommendations.filter(
                (recommend) => recommend._id !== id
              );
              setRecommendations(remainingData);
              Swal.fire(
                "Deleted!",
                "Your equipment has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };

  if (loading) {
    return (
      <span className="loading loading-spinner text-success relative top-52 ml-[900px] "></span>
    );
  }

  return (
    <div className="p-6 lg:w-9/12 mx-auto min-h-screen">
      <h1 className="text-2xl font-semibold text-text-[#004581] mb-6">
        My Recommendations
      </h1>
      <div className="overflow-x-auto bg-white rounded-lg">
        <table className="min-w-full table-auto text-gray-700">
          <thead className="bg-gray-200 text-black">
            <tr>
              <th className="py-3 px-6 text-left border-b border-gray-300">
                Recommendation Title
              </th>
              <th className="py-3 px-6 text-left border-b border-gray-300">
                Product Name
              </th>
              <th className="py-3 px-6 text-left border-b border-gray-300">
                Reason
              </th>
              <th className="py-3 px-6 text-left border-b border-gray-300">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {recommendations.map((rec) => (
              <tr key={rec._id} className="border-b hover:bg-gray-100">
                <td className="py-4 px-6 border-b">
                  {rec.recommendationTitle}
                </td>
                <td className="py-4 px-6 border-b">
                  {rec.recommendedProductName}
                </td>
                <td className="py-4 px-6 border-b">
                  {rec.recommendationReason}
                </td>
                <td className="py-4 px-6 border-b">
                  <button
                    onClick={() => handleDelete(rec._id, rec.query_id)}
                    className="text-red-500 hover:text-red-700 transition-colors duration-200"
                  >
                    <FaTrashAlt className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRecommendation;
