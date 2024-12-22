import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddQueries = () => {
    const {user} = useContext(AuthContext)
    const handleAddQueriesForm = (e)=>{
        e.preventDefault()
        const form = e.target;
        const productName = form.productName.value;
        const productBrand = form.productBrand.value;
        const productULR = form.photo.value;
        const queryTitle = form.queryTitle.value;
        const boycott = form.boycott.value;
        const userName = user?.displayName;
        const userEmail = user?.email;
        const userPhoto = user?.photoURL;
        const currentDate = new Date().toLocaleString();
        const recommendationCount = 0;
        const addQueriesData = {productName, productBrand, productULR, queryTitle, boycott, userName, userEmail, userPhoto, currentDate, recommendationCount}
        console.log(addQueriesData)

        axios.post('http://localhost:5000/allQueries', addQueriesData)
        .then(res => {
            if(res.data.insertedId){
                toast.success('Query added successfully.')
            }
        })
    }
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="card w-full max-w-5xl bg-white shadow-lg p-8 rounded-lg">
                <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
                    Add Your Query
                </h2>
                <form onSubmit={handleAddQueriesForm} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label font-medium text-gray-700">
                            Product Name
                        </label>
                        <input
                            type="text"
                            name='productName'
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
                            name='productBrand'
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
                            name='photo'
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
                            name='queryTitle'
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
                          name='boycott'
                            placeholder="Provide details of why you don't want this product"
                            className="textarea textarea-bordered w-full"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    {/* <div className="form-control">
                        <label className="label font-medium text-gray-700">
                            User Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label font-medium text-gray-700">
                            User Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label font-medium text-gray-700">
                            User Profile Image URL
                        </label>
                        <input
                            type="url"
                            placeholder="Enter profile image URL"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label font-medium text-gray-700">
                            Current Date and Time
                        </label>
                        <input
                            type="text"
                            value={new Date().toLocaleString()}
                            readOnly
                            className="input input-bordered w-full bg-gray-200"
                        />
                    </div>
                    <div className="form-control md:col-span-2">
                        <label className="label font-medium text-gray-700">
                            Recommendation Count
                        </label>
                        <input
                            type="number"
                            value="0"
                            readOnly
                            className="input input-bordered w-full bg-gray-200"
                        />
                    </div> */}
                    {/* Add Query Button */}
                    <div className="form-control md:col-span-2 mt-4">
                        <button type="submit" className="btn btn-primary w-full">
                            Add Query
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddQueries;
