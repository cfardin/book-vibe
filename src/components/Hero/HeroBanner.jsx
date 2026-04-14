import React from "react";
import heroBook from '../../assets/heroBook.png';

const HeroBanner = () => {
  return (
    <div className="md:w-10/12 mx-auto  ">
      <div className="bg-base-200 h-138.5 rounded-4xl p-30 flex items-center justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center">
          <img
            src={heroBook}
            className="max-w-sm rounded-lg"
          />
          <div>
            <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
    
            <button className="btn bg-green-400 text-white mt-6 text-2xl font-bold p-6">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
