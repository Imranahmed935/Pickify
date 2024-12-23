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

        axios.post('http://localhost:5000/allQueries', addQueriesData)
        .then(res => {
            if(res.data.insertedId){
                toast.success('Query added successfully.')
                form.reset();
            }
        })
    }
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="card w-full max-w-5xl bg-white shadow-lg p-4 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-[#728181]">
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
                    <div className="form-control md:col-span-2 mt-4">
                        <button type="submit" className="btn bg-[#82A09E] text-xl w-full">
                            Add Query
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddQueries;
