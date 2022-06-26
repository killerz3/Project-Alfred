import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Dots from '../../components/designs/dots';
export default function Signup() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="relative h-screen flex justify-center items-center">
            <div className='bg-slate-400  w-full mx-10 lg:w-1/2 flex flex-col lg:flex-row rounded-lg opacity-75 py-5'>
              <div className='w-full relative'>
              <Dots/>
                    <span className='text-5xl ml-6 text-gray-700'>Sign Up</span>
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
                    <form className='mx-3 my-9'>
                        <label className='m-4 text-gray-800 flex flex-col'>Confirm Password:
                            <input
                                type="password"
                                value={ConfirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder='Password'
                                className=' mt-3 rounded bg-slate-400 shadow-lg drop-shadow outline-1 placeholder-gray-700 appearance-none focus:outline-none focus:placeholder-slate-400 focus:bg-gray-600 focus:text-neutral-50 p-1 w-full lg:w-2/3'
                            />
                      </label>
                      <span className={`ml-4 ${ConfirmPassword!==Password&ConfirmPassword!==""?'text-red-700':"hidden"}`}>Password dosen't match</span>
                    </form>
                    <button className={`${ConfirmPassword!==Password&ConfirmPassword!==""?'bg-gray-500 line-through':""} ml-7 w-1/3 text-xl py-1 rounded bg-slate-500 shadow-lg drop-shadow  delay-150 hover:-translate-y-[5px] duration-200 ease-linear`}>
                        Submit
                  </button>
                  <br></br>
                  <Link to='/Login' className='text-sm ml-7'>already have and account? Login</Link>
                </div>
                

            </div>
        </div>
  )
}
