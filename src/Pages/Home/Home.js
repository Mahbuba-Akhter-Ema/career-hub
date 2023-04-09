import React from 'react';
import Categories from '../AllCategories/Categories';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
           <Categories/>
           <FeaturedJobs/>
        </div>
    );
};

export default Home;