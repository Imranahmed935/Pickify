import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RecentAdd from './RecentAdd';

const RecentQueries = () => {
    const [recentQueries, setRecentQueries] = useState([]);
    console.log(recentQueries)
    useEffect(()=>{
        const allQueries = async()=>{
            try{
            const {data} = await axios.get('http://localhost:5000/recent-Queries')
            setRecentQueries(data)
            }catch(err){
                console.log(err)
            }
        }
        allQueries()
    }, [])
    return (
        <div>
         <h1 className='ml-32 text-2xl mt-10 font-bold text-[#728181]'>Recent Queries</h1>
            <div className='lg:w-10/12 mx-auto px-2 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    recentQueries.map(recent => <RecentAdd key={recent._id}
                    recent={recent}
                    ></RecentAdd>)
                }
            </div>
        </div>
    );
};

export default RecentQueries;