import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import MyQueriesCard from "../../Components/MyQueriesCard/MyQueriesCard";

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

  return (
    <div>
      <h1 className="text-2xl mt-10 font-bold text-[#728181]">
      My Queries
      </h1>
      <div className='lg:w-10/12 mx-auto px-2 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
          myQueries.map(queries => <MyQueriesCard
          key={queries._id}
          queries={queries}
          ></MyQueriesCard>)
        }
      </div>
    </div>
  );
};

export default MyQueries;
