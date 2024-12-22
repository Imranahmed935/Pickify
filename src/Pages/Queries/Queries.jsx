import React, {useEffect, useState } from 'react';
import axios from 'axios';
import AllQueries from '../../Components/AllQueries/AllQueries';

const Queries = () => {
    const [queries, setQueries] = useState([]);
    console.log(queries)
    useEffect(()=>{
        const allQueries = async()=>{
            try{
            const {data} = await axios.get('http://localhost:5000/allQueries')
            setQueries(data)
            }catch(err){
                console.log(err)
            }
        }
        allQueries()
    }, [])
     
    return (
        <div>
            <h1 className='ml-36 mt-10 font-bold text-[#728181]'>All Queries</h1>
            <div className='lg:w-10/12 mx-auto px-2 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                 queries.map(query => <AllQueries 
                    key={query._id}
                    query={query}
                 ></AllQueries>)   
                }
            </div>
            
        </div>
    );
};

export default Queries;