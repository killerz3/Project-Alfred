import React from "react"
import ReactTooltip from "react-tooltip"

export default function AppointmentCard(props) {
    
        return (
            
            <div className=" rounded-xl bg-slate-900 text-neutral-100 h-40 w-auto relative
                pt-6 px-2 shadow-md shadow-black/20 col-span-1 min-w-[100px] md:min-w-[180px] lg:min-w-[230px]">
                    <p className='relative top-5 bottom-5'>{props.title}</p>
                  <div className='absolute top-2 right-1 flex'>
                      <button data-tip data-for="tip" className="h-4 w-4 hover:h-5 hover:w-5 hover:animate-spin rounded-full bg-red-400 mr-1 flex flex-col items-center justify-center"><i className="fa-solid fa-xmark text-sm" ></i></button>
                      <button data-tip data-for='tip2' className="h-4 w-4 hover:h-5 hover:w-5  rounded-full bg-orange-400 mr-1 flex flex-col items-center justify-center"><i className="fa-solid fa-minus  text-sm" ></i></button>
                      <button data-tip data-for='tip3' className="h-4 w-4 hover:h-5 hover:w-5  rounded-full bg-green-400 mr-1 flex flex-col items-center justify-center"><i className="fa-solid fa-check  text-sm" ></i></button>
                </div >
                <div className='bg-slate-700 w-1/2 text-center rounded-full absolute bottom-2 right-1 text-sm'>
                    {props.time}
                </div>
                <ReactTooltip id='tip' place='top' className="p-2 bg-red-400 ">Cancel</ReactTooltip>
                <ReactTooltip id='tip2' place='top'>Reschedule</ReactTooltip>
                <ReactTooltip id='tip3' place='top'>Done</ReactTooltip>
                </div>
                
        );
    
}


