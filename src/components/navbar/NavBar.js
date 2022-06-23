import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    return (
      <div className=' bg-slate-700 rounded-xl grid grid-flow-col items-center   mx-5 mt-5 pr-16'>
        <div className="grid gap-0 justify-start items-center grid-flow-col ">
          <div className="h-16 w-16 bg-neutral-100 rounded-full m-3"></div>
          <a href="/" className='text-lg text-neutral-100 hover:text-gray-300'>Lorem, ipsum dolor.</a>
        </div>
        <div className="hidden md:block">
          <div className="grid gap-3 grid-flow-col text-lg justify-end items-center text-neutral-100 ">
            <a href="#" className='hover:bg-neutral-200 p-1 rounded-xl hover:text-slate-800 hover:font-medium hover:border-slate-900 '>Home</a>
            <a href="#" className='hover:bg-neutral-200 p-1 rounded-xl hover:text-slate-800 hover:font-medium hover:border-slate-900 '>About</a>
            <a href="#" className='hover:bg-neutral-200 p-1 rounded-xl hover:text-slate-800 hover:font-medium hover:border-slate-900 '>Contact</a>
          </div>
        </div>


      </div>
    )
  }
}

export default NavBar