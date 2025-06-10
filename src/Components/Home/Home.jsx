import React from 'react'
import Myimage from '../../assets/avataaars.svg'

export default function Home() {
  return <>
  <div className="home mt-[120px] bg-[#1ABC9C]">
    <div className='container mx-auto py-8 min-h-[900px] flex justify-center items-center flex-col'>
      
      <img src={Myimage} alt="avataaars" className='w-75 pb-8' />
      <h1 className='text-6xl font-bold text-white uppercase'>start Framework</h1>
      <div className="shape my-6 flex justify-between items-center">
        <div className="line h-1 w-18 bg-white mx-3"></div>
        <i className="fa-solid fa-star text-white"></i>
        <div className="line h-1 w-18 bg-white mx-3"></div>
      </div>
      <h2 className='text-white font-semibold text-xl'>Graphic Artist - Web Designer - Illustrator</h2>
      </div>
    </div>
  </>
}
