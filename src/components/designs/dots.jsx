import React from 'react'

export default function Dots(props) {
  return (
    <div className='absolute top-2 right-1 flex'>
                      <button onClick={props.cross} className="h-5 w-5 hover:h-6 hover:w-6 hover:animate-spin rounded-full bg-red-400 mr-1 flex flex-col items-center justify-center"><i className="fa-solid fa-xmark text-sm" ></i></button>
                      <button onClick={props.minus} className="h-5 w-5 hover:h-6 hover:w-6  rounded-full bg-orange-400 mr-1 flex flex-col items-center justify-center"><i className="fa-solid fa-minus  text-sm" ></i></button>
                      <button onClick={props.check} className="h-5 w-5 hover:h-6 hover:w-6  rounded-full bg-green-400 mr-1 flex flex-col items-center justify-center"><i className="fa-solid fa-check  text-sm" ></i></button>
                </div >
  )
}
