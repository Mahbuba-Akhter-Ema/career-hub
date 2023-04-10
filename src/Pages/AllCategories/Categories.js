import React, { useEffect, useState } from "react";
import JobCards from "./JobCards";


const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      fetch('category.json')
      .then(res => res.json())
      .then(data => setCategories(data))
    }, [])
    
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span className="relative inline-block">
          <span className="relative">Job Category List</span>
        </span>
      </h2>
      <p className="text-base md:text-sm">
      Explore thousands of job opportunities with all the information you need. Its your future
      </p>
    </div>
    <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-4 xl:max-w-screen-lg sm:mx-auto">
        {
            categories.map(category => <JobCards
                key={category._id}
                category={category}
            ></JobCards>)
        }
    </div>
  </div>
  );
};

export default Categories;
