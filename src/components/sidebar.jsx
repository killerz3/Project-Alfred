import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {  auth,logout } from '../backend/firbase';
import { useAuthState } from "react-firebase-hooks/auth";
import Dots from "./designs/dots";
import NotFound from "../pages/404";
export default function Sidebar() {
    const [Open, setOpen] = useState(false);
    const [Item, setItem] = useState(false);

    const [user, loading, error] = useAuthState(auth);
    const navigate=useNavigate()
    const location = useLocation()

    useEffect(() => {
        
        if (!user) {
            navigate('/',{replace:true})
        }
        
    }, [user,loading]);

    const signout=()=>{
        logout()
        navigate('/',{replace:true})
    }

    return (
        <div
        className={`${Open ? "w-80 md:w-60" : "w-20 sm:w-28 md:w-20"
    } bg-slate-900  text-neutral-100  relative duration-300 ease-in min-h-screen inline-block`}


        >
            <button
                onClick={() => {
                    setOpen(!Open)
                    if (!Open){
                    setTimeout(()=>{setItem(!Item)},300)}
                    else{
                        setItem(!Item)
                    }
                }}
                className="bg-slate-400 rounded-full h-10 w-10 absolute top-5 -right-3 translate-x-16}"
            >
                {!Open ? (
                    <i class="fa-solid fa-chevron-right"></i>
                ) : (
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                )}
            </button>
            {Open? 
            <div className={` mt-16 ml-2`}>
                <img src={user.photoURL} alt="" className="rounded-full full w-6 h-6 md:w-10 md:h-10 inline block"/>
                <span className={`${Item?"":"hidden"} text-sm md:text-lg`}>Welcome {user.displayName}</span>
            </div>
                :
                <div className="mt-16 w-full flex items-center justify-center text-center">
                <img src={user.photoURL} alt="" className="rounded-full  full w-6 h-6 md:w-10 md:h-10 inline block"/>
            </div>
                }
            <div className="absolute mt-8 top-20 flex justify-center p-1 md:p-2 items-center flex-col gap-2 w-full">
                <Link to='/dashboard' className="border border-slate-100 rounded-lg w-full px-3 py-1 flex justify-center  items-center gap-1 text-sm md:text-md  "><i className="fa-solid fa-calendar-days"></i><span className={`${Item?"":"hidden"} duration-300 delay-150`}>Active Meetings</span></Link>
                <Link to='/dashboard/settings' className="border border-slate-100  w-full rounded-lg px-3 py-1 flex justify-center  items-center gap-1 "><i className="fa-solid fa-calendar-check"></i><span className={`${Item?"":"hidden"} duration-300 delay-150`}>all meetings</span></Link>
                <Link to='/' className="border border-slate-100 rounded-lg px-3 py-1  w-full flex justify-center  items-center gap-1 "><i className="fa-solid fa-gear"></i><span className={`${Item?"":"hidden"} duration-300 delay-150`}>settings</span></Link>
                <button onClick={signout} className="border border-slate-100 rounded-lg w-full px-3 py-1 flex justify-center  items-center gap-1 "><i className="fa-solid fa-arrow-right-from-bracket"></i><span className={`${Item?"":"hidden"} duration-300 delay-150`}>logout</span></button>
                
            </div>

        </div>
    );
}

