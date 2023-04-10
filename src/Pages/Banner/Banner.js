import React from "react";
import bannerImg from '../../assests/banner.png';

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          alt=""
          src={bannerImg}
          className="max-w-lg rounded-lg "
        />
        <div>
          <h1 className="text-5xl font-bold leading-tight">One Step <br/>
          Closer To Your 
          <br/>
          <span className="text-[#7E90FE]">Dream Job</span>
          </h1>
          <p className="py-6 w-3/4">
          Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
          <button className="btn bg-[#7E90FE] border-none text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
