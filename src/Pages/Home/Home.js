import React from 'react';
import Categories from '../AllCategories/Categories';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner/>
           <Categories/>
           <FeaturedJobs/>
        </div>
    );
};

export default Home;