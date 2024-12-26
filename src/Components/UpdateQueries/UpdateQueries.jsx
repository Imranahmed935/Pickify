import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateQueries = () => {
  const allData = useLoaderData();
  const { _id, productName, boycott, queryTitle, productBrand, productULR } =
    allData;

  const handleUpdateQueries = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const productBrand = form.productBrand.value;
    const productULR = form.photo.value;
    const queryTitle = form.queryTitle.value;
    const boycott = form.boycott.value;
    const data = { productBrand, productName, productULR, queryTitle, boycott };
    
    axios.put(`http://localhost:5000/update/${_id}`, data)
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className="min-h-screen lg:w-9/12 mx-auto flex justify-center items-center bg-gray-100">
      <div className="card w-full max-w-5xl bg-white shadow-lg p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-[#728181]">Update Query</h2>
        <form
          onSubmit={handleUpdateQueries}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="form-control">
            <label className="label font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              defaultValue={productName}
              name="productName"
              placeholder="Enter product name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-medium text-gray-700">
              Product Brand
            </label>
            <input
              type="text"
              defaultValue={productBrand}
              name="productBrand"
              placeholder="Enter product brand"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-medium text-gray-700">
              Product Image URL
            </label>
            <input
              type="text"
              defaultValue={productULR}
              name="photo"
              placeholder="Enter image URL"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-medium text-gray-700">
              Query Title
            </label>
            <input
              type="text"
              defaultValue={queryTitle}
              name="queryTitle"
              placeholder="Is there any better product that gives me the same quality?"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:col-span-2">
            <label className="label font-medium text-gray-700">
              Boycotting Reason Details
            </label>
            <textarea
              name="boycott"
              defaultValue={boycott}
              placeholder="Provide details of why you don't want this product"
              className="textarea textarea-bordered w-full"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="form-control md:col-span-2 mt-4">
            <button type="submit" className="btn btn-primary w-full">
              Update Query
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateQueries;
