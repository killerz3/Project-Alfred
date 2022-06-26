import React from 'react'

export default function Dots() {
  return (
    <div className='absolute top-2 right-1 flex'>
                      <div className="h-4 w-4 hover:h-5 hover:w-5 hover:animate-spin rounded-full bg-red-400 mr-1 flex flex-col items-center justify-center"><i className="fa-solid fa-xmark text-sm" ></i></div>
                      <div className="h-4 w-4 hover:h-5 hover:w-5  rounded-full bg-orange-400 mr-1 flex flex-col items-center justify-center"><i className="fa-solid fa-minus  text-sm" ></i></div>
                      <div className="h-4 w-4 hover:h-5 hover:w-5  rounded-full bg-green-400 mr-1 flex flex-col items-center justify-center"><i className="fa-solid fa-check  text-sm" ></i></div>
                </div >
  )
}
