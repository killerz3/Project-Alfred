import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Dots from '../../components/designs/dots';

const HandleSubmit = async (Email,Password) => {
    
    if (Password == "" || Email == "") {
        return alert()
    }


}


export default function Login() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    return (
        <div className="h-screen flex justify-center items-center">
            
            <div className='bg-slate-400  w-full mx-10 lg:w-1/2 flex flex-col lg:flex-row rounded-lg opacity-75 py-5 relative'>
                <Dots/>
                <div className='w-full lg:w-2/3 relative'>

                    <span className='text-5xl ml-6 text-gray-700'>Sign In</span>
                    <form className='mx-3 mt-9 mb-5'>
                        <label className='m-4 text-gray-800 flex flex-col'>Enter Email Adress:
                            <input
                                type="email"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email'
                                className=' mt-3 rounded bg-slate-400 shadow-lg drop-shadow outline-1 placeholder-gray-700 appearance-none focus:outline-none focus:placeholder-slate-400   focus:bg-gray-600 focus:text-neutral-50 p-1 w-full lg:w-2/3'
                            />
                        </label>
                    </form>
                    <form className='mx-3 my-9'>
                        <label className='m-4 text-gray-800 flex flex-col'>Enter Password:
                            <input
                                type="password"
                                value={Password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Password'
                                className=' mt-3 rounded bg-slate-400 shadow-lg drop-shadow outline-1 placeholder-gray-700 appearance-none focus:outline-none focus:placeholder-slate-400 focus:bg-gray-600 focus:text-neutral-50 p-1 w-full lg:w-2/3'
                            />
                        </label>
                    </form>
                    <button className='ml-7 w-1/3 text-xl py-1 rounded bg-slate-500 shadow-lg drop-shadow  delay-150 hover:-translate-y-[5px] duration-200 ease-linear'>
                        Submit
                    </button>
                    <Link to='/signup' className='text-xl ml-2'>or Sign Up</Link>
                </div>
                <div>
                    Sign In with
                </div>

            </div>
        </div>
    )
} 
