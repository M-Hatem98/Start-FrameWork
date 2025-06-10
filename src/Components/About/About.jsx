import React from 'react';

export default function About() {
  return (
    <div className="about mt-18 bg-[#1ABC9C]">
      <div className="container mx-auto py-8 min-h-screen flex justify-center items-center flex-col px-4 text-center">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase">
          about component
        </h1>

        <div className="shape my-6 flex justify-center items-center">
          <div className="line h-1 w-16 bg-white mx-3"></div>
          <i className="fa-solid fa-star text-white text-xl"></i>
          <div className="line h-1 w-16 bg-white mx-3"></div>
        </div>

        <div className="content w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-6 mt-4 text-white text-base sm:text-lg md:text-xl text-left">
          <div className="right md:w-1/2">
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </div>
          <div className="left md:w-1/2">
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </div>
        </div>

      </div>
    </div>
  );
}
