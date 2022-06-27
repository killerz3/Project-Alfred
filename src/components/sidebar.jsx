import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import {  auth,logout } from '../backend/firbase';
import { useAuthState } from "react-firebase-hooks/auth";
export default function Sidebar() {
    const [Open, setOpen] = useState(false);
    const [Item, setItem] = useState(false);

    const [user, loading, error] = useAuthState(auth);
    const navigate=useNavigate()

    useEffect(() => {
        
        if (!user) {
            navigate('/',{replace:true})
        }
        
    }, [user]);

    return (
        <div
            className={`${Open ? "w-96 md:w-72" : "w-40 md:w-20"
                } bg-slate-900  text-neutral-100  relative duration-300 ease-in `}
        >
            <button
                onClick={() => {
                    setOpen(!Open)
                    setTimeout(()=>{setItem(!Item)},300)
                }}
                className="bg-slate-400 rounded-full h-10 w-10 absolute top-5 -right-3 translate-x-16}"
            >
                {!Open ? (
                    <i class="fa-solid fa-chevron-right"></i>
                ) : (
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                )}
            </button>
            <div className="absolute top-20 flex justify-center items-center flex-col gap-2 w-full">
                <Link to='/' className="border border-slate-100 rounded-lg px-3 py-1 flex justify-center  items-center gap-1 "><i className="fa-solid fa-calendar"></i><span className={`${Item?"":"hidden"} duration-300 delay-150`}>Bookings</span></Link>
                <Link to='/dashboard/settings' className="border border-slate-100 rounded-lg px-3 py-1 flex justify-center  items-center gap-1 "><i className="fa-solid fa-calendar"></i><span className={`${Item?"":"hidden"} duration-300 delay-150`}>Bookings</span></Link>
                <Link to='/' className="border border-slate-100 rounded-lg px-3 py-1 flex justify-center  items-center gap-1 "><i className="fa-solid fa-calendar"></i><span className={`${Item?"":"hidden"} duration-300 delay-150`}>Bookings</span></Link>
                <button onClick={logout} className="border border-slate-100 rounded-lg px-3 py-1 flex justify-center  items-center gap-1 "><i className="fa-solid fa-arrow-right-from-bracket"></i><span className={`${Item?"":"hidden"} duration-300 delay-150`}>logout</span></button>
                
            </div>

        </div>
    );
}
