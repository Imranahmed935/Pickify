import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import RecentAdd from "./RecentAdd";
import { AuthContext } from "../../Provider/AuthProvider";

const RecentQueries = () => {
  const [recentQueries, setRecentQueries] = useState([]);
  const { loading } = useContext(AuthContext);
  useEffect(() => {
    const allQueries = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/recent-Queries"
        );
        setRecentQueries(data);
      } catch (err) {
        console.log(err);
      }
    };
    allQueries();
  }, []);

  if (loading) {
    return (
      <span className="loading loading-spinner text-success relative top-14 ml-[700px] "></span>
    );
  }

  return (
    <div className="lg:w-9/12 mx-auto">
      <h1 className=" text-2xl mt-10 font-bold text-[#004581]">
        Recent Queries
      </h1>
      <div className="lg:w-10/12 mx-auto px-2 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {recentQueries.map((recent) => (
          <RecentAdd key={recent._id} recent={recent}></RecentAdd>
        ))}
      </div>
    </div>
  );
};

export default RecentQueries;
