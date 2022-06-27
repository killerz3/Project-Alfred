import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RegisterWithEmailAndPassword ,auth} from '../../backend/firbase';
import Dots from '../../components/designs/dots';
import { useAuthState } from "react-firebase-hooks/auth";
export default function Signup() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [Name, setName] = useState("");
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const [Bg,setBg]=useState('bg-slate-400')
    const register = () => {
        if (Password === ConfirmPassword & ConfirmPassword !== "") {
            console.log(Name,Email,Password);
            if (Name!=="") {
                RegisterWithEmailAndPassword(Name, Email, Password)
                console.log("in registeration");
            }
        }
    }

    useEffect(() => {
        
        if (user) {
            navigate('/dashboard',{replace:true})
        }
        
        
    }, [user]);

    const goBack = () => {
        navigate('/')
    }
    const check=()=>setBg("bg-green-200")


  return (
    <div className="relative h-screen flex justify-center items-center">
            <div className={` ${Bg} w-full mx-10 lg:w-1/2 flex flex-col lg:flex-row rounded-lg opacity-75 py-5 relative duration-300`}>
              <div className='w-full relative'>
              <Dots cross={goBack} check={check} minus={()=>setBg('bg-slate-400')} />
                    <span className='text-5xl ml-6 text-gray-700'>Sign Up</span>
              
                    
                    <form className='mx-3 mt-9 mb-5'>
                        <label className='m-4 text-gray-800 flex flex-col'>Enter your name:
                            <input
                                type="Name"
                                value={Name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Name'
                                className={`mt-3 rounded ${Bg} shadow-lg drop-shadow outline-1 placeholder-gray-700 appearance-none focus:outline-none focus:placeholder-slate-400   focus:bg-gray-600 focus:text-neutral-50 p-1 w-full lg:w-2/3`}
                            />
                        </label>
                        <label className='m-4 text-gray-800 flex flex-col'>Enter Email Adress:
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
                        <label className='m-4 text-gray-800 flex flex-col'>Enter Password:
                            <input
                                type="password"
                                value={Password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Password'
                                className={`mt-3 rounded ${Bg} shadow-lg drop-shadow outline-1 placeholder-gray-700 appearance-none focus:outline-none focus:placeholder-slate-400   focus:bg-gray-600 focus:text-neutral-50 p-1 w-full lg:w-2/3`}
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
                                className={`mt-3 rounded ${Bg} shadow-lg drop-shadow outline-1 placeholder-gray-700 appearance-none focus:outline-none focus:placeholder-slate-400   focus:bg-gray-600 focus:text-neutral-50 p-1 w-full lg:w-2/3`}
                            />
                      </label>
                      <span className={`ml-4 ${ConfirmPassword!==Password&ConfirmPassword!==""?'text-red-700':"hidden"}`}>Password dosen't match</span>
                    </form>
                    <button onClick={register} className={`${ConfirmPassword!==Password&ConfirmPassword!==""?'bg-gray-500 line-through':""} ml-7 w-1/3 text-xl py-1 rounded ${Bg==='bg-slate-400'?'bg-slate-500':'bg-green-400'} shadow-lg drop-shadow  delay-150 hover:-translate-y-[5px] duration-200 ease-linear`}>
                        Submit
                  </button>
                  <br></br>
                  <Link to='/Login' replace='true' className='text-sm ml-7'>already have and account? Login</Link>
                </div>
                
              <div>
              </div>

          </div>
          
        </div>
  )
}
