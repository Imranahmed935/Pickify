import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import QueryBanner from "../../Components/QueryBanner/QueryBanner";

const MyQueries = () => {
  const { user, loading} = useContext(AuthContext);
  const [myQueries, setMyQueries] = useState([]);

  useEffect(() => {
    const allMyQueries = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/my-queries/${user?.email}`, {withCredentials:true}
        );
        setMyQueries(data);
      } catch (err) {
        console.log(err);
      }
    };
    allMyQueries();
  }, [user]);

  const handleDelete = (_id) => {
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
        axios.delete(`http://localhost:5000/delete-queries/queries/${_id}`,).then((res) => {
          if (res.data.deletedCount > 0) {
            setMyQueries(data => data.filter(d => d._id !== _id));
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
      <span className="loading loading-spinner text-success relative ml-[700px] "></span>
    );
  }

  return (
    <div className="lg:w-9/12 mx-auto ">
    <div>
      <QueryBanner />
    </div>
    <h1 className="text-2xl mt-10 font-bold text-[#004581]">My Queries</h1>
    
    {myQueries.length === 0 ? (
      <div className="text-center mt-10">
        <p className="text-lg text-[#728181] font-semibold">No queries found. Start by adding your first query!</p>
        <Link to="/addQueries">
          <button className="btn mt-5 bg-[#004581] text-white">Add Query</button>
        </Link>
      </div>
    ) : (
      <div className="lg:w-10/12 mx-auto px-2 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {myQueries.map((queries) => (
          <div
            key={queries._id}
            className="card card-compact bg-base-100 w-96 border transition-all duration-300 hover:scale-105 border-[#728181]"
          >
            <figure>
              <img className="w-96 h-60" src={queries.productULR} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <strong>Product Name</strong>: {queries.productName}
              </h2>
              <h3>
                <strong>Brand</strong>: {queries.productBrand}
              </h3>
              <p>
                <strong>Recommendation Count</strong>:{" "}
                {queries.recommendationCount}
              </p>
              <div className="card-actions justify-center">
                <Link to={`/Queries_Details/${queries._id}`}>
                  <button className="btn bg-[#004581] text-white">View Details</button>
                </Link>
                <Link to={`/update-queries/${queries._id}`}>
                  <button className="btn bg-[#004581] text-white">Update</button>
                </Link>
                <button
                  onClick={() => handleDelete(queries._id)}
                  className="btn bg-[#004581] text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
  
  );
};

export default MyQueries;
