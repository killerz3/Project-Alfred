import React from 'react'
import { Link } from 'react-router-dom'
import wave1 from '../assets/wave.svg'
import wave2 from '../assets/wave 2.svg'
import wave3 from '../assets/wave3.svg'
import sun from '../assets/sun.svg'

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center relative px-8">
        <div className=" rounded-xl bg-slate-900 text-neutral-100 h-60 w-auto relative
        pt-6 px-2 flex items-center shadow-md shadow-black/20 p-5">
            <p className='relative top-5 bottom-5 text-2xl md:text-7xl'>404 Page Not found 😵</p>
          <div className='absolute top-2 right-1 flex'>
              <Link to="/" className="h-10 w-10 lg:h-4 lg:w-4 p-4  hover:h-5 hover:w-5 hover:animate-spin rounded-full bg-red-400 mr-1 flex flex-col items-center justify-center"><i className="fa-solid fa-xmark text-lg lg:text-sm" ></i></Link>
              <div className="h-10 w-10 lg:h-4 lg:w-4 p-4 hover:h-5 hover:w-5  rounded-full bg-orange-400 mr-1 flex flex-col items-center justify-center"><i className="fa-solid fa-minus  text-lg lg:text-sm" ></i></div>
              <div className="h-10 w-10 lg:h-4 lg:w-4 p-4 hover:h-5 hover:w-5  rounded-full bg-green-400 mr-1 flex flex-col items-center justify-center"><i className="fa-solid fa-check  text-lg lg:text-sm" ></i></div>
        </div >
        </div>
          <img src={wave1} alt="wave1" className='absolute  bottom-0 ' />
          <img src={wave2} alt="wave1" className='absolute bottom-0 -z-10' />
          <img src={wave3} alt="wave1" className='absolute bottom-0 -z-10' />
          <img src={sun} alt="wave1" className='absolute  bottom-20 left-0 hidden md:block  -z-20 h-1/5 w-1/5' />
          {/* <img src={birds} alt="wave1" className='absolute top-10 right-5 hidden lg:block -z-20 h-1/5 w-1/5 invert' />
          <img src={birds2} alt="wave1" className='absolute top-5 left-10 hidden lg:block -z-20 h-1/5 w-1/5 invert' /> */}
    </div>
  )
}
