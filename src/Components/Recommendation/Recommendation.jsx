import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
const Recommendation = ({detailsData}) => {
  const { user } = useContext(AuthContext);
  const handleRecommendation = (e) => {
    e.preventDefault();
    const form = e.target;
    const recommendationTitle = form.recommendationTitle.value;
    const recommendedProductName = form.recommendedProductName.value;
    const recommendedProductImage = form.recommendedProductImage.value;
    const recommendationReason = form.recommendationReason.value;
    const recommenderEmail = user.email;
    const recommenderName = user.displayName;
    const currentDate = new Date().toLocaleString();
    const queryTitle = detailsData.queryTitle;
    const productName = detailsData.productName;
    const query_id = detailsData._id;
    const userName = detailsData.userName;
    const userEmail = detailsData.userEmail;
    const recommendationData = {
      recommendationTitle,
      recommendedProductName,
      recommendedProductImage,
      recommenderName,
      currentDate,
      recommenderEmail,
      recommendationReason,
      queryTitle,
      productName,
      query_id,
      userName,
      userEmail
    };
   axios.post('https://pickify-server.vercel.app/recommendationQuery', recommendationData)
   .then(res =>{
    if(res.data.insertedId){
        toast.success('recommendation added successfully.')
    }
   })
  };
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md mt-20">
      <h2 className="text-2xl font-bold text-[#004581] mb-4">Add A Recommendation</h2>
      <form onSubmit={handleRecommendation} className="space-y-4">
        <div className="form-control">
          <label className="label font-medium text-gray-700">
            Recommendation Title
          </label>
          <input
            type="text"
            name="recommendationTitle"
            placeholder="Enter recommendation title"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label font-medium text-gray-700">
            Recommended Product Name
          </label>
          <input
            type="text"
            name="recommendedProductName"
            placeholder="Enter recommended product name"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label font-medium text-gray-700">
            Recommended Product Image
          </label>
          <input
            type="text"
            name="recommendedProductImage"
            placeholder="Enter image URL"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label font-medium text-gray-700">
            Recommendation Reason
          </label>
          <textarea
            name="recommendationReason"
            placeholder="Why are you recommending this product?"
            className="textarea textarea-bordered w-full"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn bg-[#004581] text-white hover:text-[#004581] w-full">
          Add Recommendation
        </button>
      </form>
    </div>
  );
};

export default Recommendation;
