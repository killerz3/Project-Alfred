import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Dots from '../../components/designs/dots';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth,logInWithEmailAndPassword,signInWithGoogle} from '../../backend/firbase'
import { useAuthState } from "react-firebase-hooks/auth";
import googleicon from "../../assets/googleicon.png";



export default function Login() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ErrorMsg, setErrorMsg] = useState();
    const navigate=useNavigate()
    const [user, loading, error] = useAuthState(auth);
    const [Bg,setBg]=useState('bg-slate-400')
    useEffect(() => {
        if (loading) {
            
            return;
        }
        if (user) navigate("/dashboard",{replace:true});
        
    }, [user,loading]);

    const goBack = () => {
        navigate('/')
    }
    const check=()=>setBg("bg-green-200")

    return (
        <div className="h-screen flex justify-center items-center">

            <div className={` ${Bg} w-full mx-10 lg:w-1/2 flex flex-col lg:flex-row rounded-lg opacity-75 py-5 relative duration-300`}>
                <Dots cross={goBack} check={check} minus={()=>setBg('bg-slate-400')} />
                <div className='w-full lg:w-2/3 relative'>

                    <span className='text-5xl ml-6 text-black-400'>Sign In</span>
                    <form className='mx-3 mt-9 mb-5'>
                        <label className='m-4 text-black-100 flex flex-col'>Enter Email Adress:
                            <input
                                type="email"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email'
                                className={`mt-3 rounded ${Bg} shadow-lg drop-shadow outline-1 placeholder-gray-700 appearance-none focus:outline-none focus:placeholder-slate-400   focus:bg-gray-600 focus:text-neutral-50 p-1 w-full lg:w-2/3`}
                            />
                        </label>
                    </form>
                    <form className='mx-3 my-9'>
                        <label className='m-4 text-black-200 flex flex-col'>Enter Password:
                            <input
                                type="password"
                                value={Password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Password'
                                className={` mt-3 rounded ${Bg} shadow-lg drop-shadow outline-1 placeholder-gray-700 appearance-none focus:outline-none focus:placeholder-slate-400 focus:bg-gray-600 focus:text-neutral-50 p-1 w-full lg:w-2/3`}
                            />
                        </label>
                        <span className='text-red-600 ml-7'>{ErrorMsg}</span>
                    </form>
                    <button onClick={() => logInWithEmailAndPassword(Email, Password)} className={`ml-[24%] lg:ml-7 w-1/4 lg:w-1/3 text-xl py-1 rounded ${Bg==='bg-slate-400'?"bg-slate-500":"bg-green-400"} shadow-lg drop-shadow  delay-150 hover:-translate-y-[5px] duration-200 ease-linear`}>
                        Submit
                    </button>

                    <Link to='/signup' replace="true" className='text-xl ml-2'>or Sign Up</Link>
                </div>
                
                <div className='h-40 text-xl  pt-20 px-[30%] lg:px-0 lg:pt-[20%]'>
                    or sign in with
                    
                    <button onClick={signInWithGoogle} className={`ml-7 lg:mt-2 w-1/3 text-[16px]  p-[5px] rounded ${Bg==='bg-slate-400'?"bg-slate-500":"bg-green-400"} shadow-lg drop-shadow  delay-150 hover:-translate-y-[5px] duration-200 ease-linear`}>
                        Google
                    </button>
                </div>

            </div>
        </div>
    )
} 
