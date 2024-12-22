import React from 'react';
import Banner from '../../Components/Banner/Banner';
import RecentQueries from '../../Components/RecentQueries/RecentQueries';
import ProductVariation from '../../Components/ProductVariation/ProductVariation';;
import Trend from '../../Components/Trend/Trend';


const Home = () => {
    return (
        <div>
           <Banner/>
           <RecentQueries/>
           <ProductVariation/>
           <Trend/>
        </div>
    );
};

export default Home;