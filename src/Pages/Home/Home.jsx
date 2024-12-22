import React from 'react';
import Banner from '../../Components/Banner/Banner';
import RecentQueries from '../../Components/RecentQueries/RecentQueries';
import ProductVariation from '../../Components/ProductVariation/ProductVariation';


const Home = () => {
    return (
        <div>
           <Banner/>
           <RecentQueries/>
           <ProductVariation/>
        </div>
    );
};

export default Home;