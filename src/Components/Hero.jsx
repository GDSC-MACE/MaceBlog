import React from 'react'
import maceblog from '../assets/images/maceblog.png'
import boy from '../assets/images/boy.png'

function Hero() {
  return (
    <section id='home' className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-8 relative'>
    <div className='lg:col-span-2 justify-center items-start flex-col xl:px-0 sm:px-16 px-4'>
        <div className='px-6 pt-20'>
        <img src={maceblog} alt="" id='home' className='cursor-pointer' />
        </div>
        <div className='flex space-x-14 mt-4 pl-11'>
        <button type='button' className='justify-center transform motion-safe:hover:scale-110 bg-secondary shadow-lg shadow-secondary/50 py-4 px-11 font-poppins font-bold text-18px outline-none rounded-bl-full'>
          EXPLORE
        </button>
        <button type='button' className='justify-center transform motion-safe:hover:scale-110 bg-primary shadow-lg shadow-primary/50 py-4 px-9 font-poppins font-bold text-18px outline-none rounded-br-full'>
          CONTRIBUTE
        </button>

        </div>
    </div>


    
    <div className='flex-1 flex justify-center items-start flex-col pl-15 pt-5'>
    <p className="flex items-center text-12px font-medium text-neutral-400">
  <p className="relative ml-3 size-48 overflow-hidden">
    <p
      className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white"
    >
      Check out the latest thoughts shared by MACEians
    </p>
    <p
      className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:1.83s]"
    >
       See what different clubs have shared
    </p>
    <p
      className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:2.83s]"
    >
      Stay updated with the latest achievements of MACEians
    </p>
  </p>
</p>
    </div>


    <div className='flex-1 flex flex-col items-end'>
      <img src={boy} alt="" className='size-72 lg:pt-20' />
    </div>

    <div className="lg:col-span-4 md:col-span-3 sm:justify-start justify-center w-full group feedback-container bg-secondary/10 rounded-xl shadow-lg hover:bg-primary/50 shadow-secondary/40 relative mt-11">
      <div className="flex justify-between flex-col px-7 py-6 rounded-[5px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <div className="flex flex-row">
      <div className="flex flex-col ml-4">
        <p className="font-poppins font-normal text-[16px] leading-[25px] text-dimWhite group-hover:text-secondary">
        Welcome to our blog, a platform dedicated to showcasing the vibrant voices and insightful perspectives of the students of MACE Kothamangalam. Created by the passionate project team of GDSC MACE, our website serves as a hub for sharing compelling articles and engaging blog posts. Here, you'll discover a diverse range of topics, from technology and academia to lifestyle and beyond, all crafted by the talented minds within our community. Join us as we celebrate knowledge, creativity, and the spirit of exploration through the written word.
        </p>
      </div>
    </div>
  </div>
    </div>
    </section>
  
    
  )
}

export default Hero