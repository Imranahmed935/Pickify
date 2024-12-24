import React, { useEffect, useState } from "react";
import axios from "axios";
import AllQueries from "../../Components/AllQueries/AllQueries";

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [search, setSearch] = useState('')
 

  useEffect(() => {
    const allQueries = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/allQueries?search=${search}`);
        setQueries(data);
      } catch (err) {
        console.log(err);
      }
    };
    allQueries();
  }, [search]);


  return (
    <div>
      <div className="flex items-center gap-52 mt-10">
  <h1 className="text-2xl font-bold text-[#728181] ml-36">
    All Queries
  </h1>

  <div className="relative w-1/3 group">
    <input
      type="text"
      onChange={(e)=>setSearch(e.target.value)}
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
  <div>
    <button className="btn btn-neutral">Change Layout</button>
  </div>
</div>

      <div className="lg:w-10/12 mx-auto px-2 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {queries.map((query) => (
          <AllQueries key={query._id} query={query}></AllQueries>
        ))}
      </div>
    </div>
  );
};

export default Queries;
