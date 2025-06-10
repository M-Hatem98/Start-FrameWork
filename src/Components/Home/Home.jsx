import React from 'react';
import Myimage from '../../assets/avataaars.svg';

export default function Home() {
  return (
    <div className="home mt-28 bg-[#1ABC9C]">
      <div className="container mx-auto py-8 min-h-screen flex justify-center items-center flex-col px-4 text-center">
        
        <img 
          src={Myimage} 
          alt="avataaars" 
          className="w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 pb-8" 
        />

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase">
          start Framework
        </h1>

        <div className="shape my-6 flex justify-center items-center">
          <div className="line h-1 w-16 bg-white mx-3"></div>
          <i className="fa-solid fa-star text-white text-xl"></i>
          <div className="line h-1 w-16 bg-white mx-3"></div>
        </div>

        <h2 className="text-white font-semibold text-base sm:text-lg md:text-xl">
          Graphic Artist - Web Designer - Illustrator
        </h2>

      </div>
    </div>
  );
}
