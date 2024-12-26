import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AllQueries from "../../Components/AllQueries/AllQueries";
import { AuthContext } from "../../Provider/AuthProvider";

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [search, setSearch] = useState("");
  const [gridCols, setGridCols] = useState("lg:grid-cols-3");
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    const allQueries = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/allQueries?search=${search}`
        );
        setQueries(data);
      } catch (err) {
        console.log(err);
      }
    };
    allQueries();
  }, [search]);

  const toggleLayout = () => {
    setGridCols((prev) =>
      prev === "lg:grid-cols-3" ? "lg:grid-cols-2 lg:w-7/12" : "lg:grid-cols-3"
    );
  };

  if (loading) {
    return (
      <span className="loading loading-spinner text-success relative top-52 ml-[650px] "></span>
    );
  }

  return (
    <div className="lg:w-9/12 mx-auto">
      <div className="lg:flex items-center gap-52 mt-10">
        <h1 className="text-2xl font-bold text-[#004581] ml-36">All Queries</h1>

        <div className="relative lg:w-1/3 w-full group">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-full px-4 py-2 pl-10 hover:outline-emerald-500 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 opacity-70 text-gray-500 hover:text-blue-300 transition-all"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <p className="text-[#728181] font-bold">Change Layout</p>
          <button onClick={toggleLayout} className="btn bg-[#004581] text-white font-bold">
            2
          </button>
          <button onClick={toggleLayout} className="btn bg-[#004581] text-white font-bold">
            3
          </button>
        </div>
      </div>

      <div
        className={`lg:w-10/12 mx-auto px-2 py-10 grid grid-cols-1 md:grid-cols-2 ${gridCols} gap-10`}
      >
        {queries.map((query) => (
          <AllQueries key={query._id} query={query}></AllQueries>
        ))}
      </div>
    </div>
  );
};

export default Queries;
