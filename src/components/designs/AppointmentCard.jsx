


export default function AppointmentCard(props) {
    
        return (
            
            <div className=" rounded-xl bg-slate-900 text-neutral-100 h-40 w-auto relative
                pt-6 px-2 shadow-md shadow-black/20 col-span-1 min-w-[100px] md:min-w-[180px] lg:min-w-[230px]">
                    <p className='relative top-5 bottom-5'>{props.title}</p>
                  <div className='absolute top-2 right-1 flex'>
                      <div className="h-4 w-4 hover:h-5 hover:w-5 hover:animate-spin rounded-full bg-red-400 mr-1 flex flex-col items-center justify-center"><i className="fa-solid fa-xmark text-sm" ></i></div>
                      <div className="h-4 w-4 hover:h-5 hover:w-5  rounded-full bg-orange-400 mr-1 flex flex-col items-center justify-center"><i className="fa-solid fa-minus  text-sm" ></i></div>
                      <div className="h-4 w-4 hover:h-5 hover:w-5  rounded-full bg-green-400 mr-1 flex flex-col items-center justify-center"><i className="fa-solid fa-check  text-sm" ></i></div>
                </div >
                <div className='bg-slate-700 w-1/2 text-center rounded-full absolute bottom-2 right-1 text-sm'>
                    {props.time}
                </div>
                </div>
                
        );
    
}


