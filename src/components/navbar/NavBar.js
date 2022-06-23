import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class NavBar extends Component {
  render() {
    return (
      <nav className=' bg-slate-700 rounded-xl grid grid-flow-col items-center   mx-5 mt-5 pr-16'>
        <div className="grid gap-0 justify-start items-center grid-flow-col ">
          <div className="h-16 w-16 bg-neutral-100 rounded-full m-3"></div>
          <a href="/" className='text-lg text-neutral-100 hover:text-gray-300'>Lorem, ipsum dolor.</a>
        </div>
        <div className="hidden md:block">
          <div className="grid gap-3 grid-flow-col text-lg justify-end items-center text-neutral-100 ">
            <Link to ='/' className='hover:bg-neutral-200 p-1 rounded-xl hover:text-slate-800 hover:font-medium hover:border-slate-900 '>Home</Link>
            <Link to ='/about' className='hover:bg-neutral-200 p-1 rounded-xl hover:text-slate-800 hover:font-medium hover:border-slate-900 '>About</Link>
            <Link to ='/contact' className='hover:bg-neutral-200 p-1 rounded-xl hover:text-slate-800 hover:font-medium hover:border-slate-900 '>Contact</Link>
          </div>
        </div>


      </nav>
    )
  }
}

export default NavBar