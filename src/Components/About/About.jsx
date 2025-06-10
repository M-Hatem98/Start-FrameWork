import React from 'react'

export default function About() {
  return <>
       <div className="about mt-[120px] bg-[#1ABC9C]">
    <div className='container mx-auto py-8 min-h-[900px] flex justify-center items-center flex-col'>
      <h1 className='text-6xl font-bold text-white uppercase'>about component</h1>
      <div className="shape my-6 flex justify-between items-center">
        <div className="line h-1 w-18 bg-white mx-3"></div>
        <i className="fa-solid fa-star text-white"></i>
        <div className="line h-1 w-18 bg-white mx-3"></div>
      </div>
      <div className="content px-30 w-full flex justify-between flex-row gap-4">
        <div className="right text-white text-xl">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
        <div className="left text-white text-xl">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
      </div>
     </div>
     </div>
    </>
}
