import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import QueryBanner from "../../Components/QueryBanner/QueryBanner";

const MyQueries = () => {
  const { user } = useContext(AuthContext);
  const [myQueries, setMyQueries] = useState([]);

  useEffect(() => {
    const allMyQueries = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/my-queries/${user?.email}`
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
        axios.delete(`http://localhost:5000/delete-queries/queries/${_id}`).then((res) => {
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

  return (
    <div>
      <div>
        <QueryBanner/>
      </div>
      <h1 className="text-2xl mt-10 font-bold text-[#728181]">My Queries</h1>
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
                <strong>recommendationCount</strong>:{" "}
                {queries.recommendationCount}
              </p>
              <div className="card-actions justify-center ">
                <Link to={`/Queries_Details/${queries._id}`}>
                  <button className="btn bg-[#c3c9c9]">view Details</button>
                </Link>
                <Link to={`/update-queries/${queries._id}`}>  <button className="btn bg-[#c3c9c9]">update</button></Link>
                <button
                  onClick={() => handleDelete(queries._id)}
                  className="btn bg-[#c3c9c9]"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyQueries;
