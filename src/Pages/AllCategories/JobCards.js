import React from 'react';

const JobCards = ({category}) => {
    const {picture, title, available_jobs} = category;
    console.log(category);

    return (
      <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
        <div className="relative w-full h-30">
          <img
            src={picture}
            className="object-cover w-20 h-20 rounded-t"
            alt="Plan"
          />
        </div>
        <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
          <div>
            <div className="text-lg font-semibold">{title}</div>
            <p className="text-sm text-gray-900">
              {available_jobs}
            </p>
          </div>
        </div>
      </div>
    );
};

export default JobCards;