
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { auth } from './backend/firbase';
import AppointmentCard from './components/designs/AppointmentCard';
import NavBar from './components/navbar/NavBar' 
import React, {useEffect} from 'react';




function App() {
  const [user]=useAuthState(auth)
  const navigate=useNavigate()
  useEffect(() => {
    if(user){
      navigate("/dashboard",{replace:true})
    }
  
    
  }, [])
  

  return (
    <div className="App">
      <NavBar /> 
      <h1 className='text-white text-3xl'>Alfred</h1>
      
    </div>
  );
}

export default App;
