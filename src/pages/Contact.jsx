import React, { Component } from 'react'
import NavBar from '../components/navbar/NavBar'
export default class Contact extends Component {
  render() {
      return (
        
          <>
              <NavBar/>
              <div className="grid gap-5 grid-flow-row md:grid-flow-col justify-start ">
                <div className="m-5 rounded-xl bg-slate-900 text-neutral-100 h-40 w-40 flex justify-end p-2 shadow-md shadow-black/20">
                  <div className="h-4 w-4 rounded-full bg-red-400 mr-1"></div>
                  <div className="h-4 w-4 rounded-full bg-orange-400 mr-1"></div>
                  <div className="h-4 w-4 rounded-full bg-green-400 mr-1"></div>
                </div>
                <div className="m-5 rounded-xl bg-slate-900 text-neutral-100 h-40 w-40 flex justify-end p-2 shadow-md shadow-black/20">
                  <div className="h-4 w-4 rounded-full bg-red-400 mr-1"></div>
                  <div className="h-4 w-4 rounded-full bg-orange-400 mr-1"></div>
                  <div className="h-4 w-4 rounded-full bg-green-400 mr-1"></div>
                </div>
                <div className="m-5 rounded-xl bg-slate-900 text-neutral-100 h-40 w-40 flex justify-end p-2 shadow-md shadow-black/20">
                  <div className="h-4 w-4 rounded-full bg-red-400 mr-1"></div>
                  <div className="h-4 w-4 rounded-full bg-orange-400 mr-1"></div>
                  <div className="h-4 w-4 rounded-full bg-green-400 mr-1"></div>
                </div>
                <div className="m-5 rounded-xl bg-slate-900 text-neutral-100 h-40 w-40 flex justify-end p-2 shadow-md shadow-black/20">
                  <div className="h-4 w-4 rounded-full bg-red-400 mr-1"></div>
                  <div className="h-4 w-4 rounded-full bg-orange-400 mr-1"></div>
                  <div className="h-4 w-4 rounded-full bg-green-400 mr-1"></div>
                </div>
              </div>
          </>
    )
  }
}
