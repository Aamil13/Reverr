import React, { useState } from 'react'
import "./style.css"
import { logIN } from '../Store/user';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email ,setEmail] = useState('');
  const [password ,setPassword] = useState('');

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault();
    let data = {email,password}
    // console.log(data);

    try {
     
     let res =await  dispatch(logIN(data))
    //  console.log(res);
     if(res?.payload?._tokenResponse?.email){
      navigate("/")
     }
       
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className='flexcontainer'>
        <div className='container'>
            <p style={{backgroundColor:"white",textAlign:"center"}}>Login</p>
           
            <form className='inputcontainer' onSubmit={handleSubmit}>
       <input className='inputs' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' type="email"  />
        <input className='inputs' onChange={(e)=>setPassword(e.target.value)} placeholder='Password' type="password"  />
        <button>Submit</button>
       </form>

           <p onClick={()=>navigate("/signup")} style={{backgroundColor:"white",textAlign:"center",cursor:"pointer"}}>Don't have an account?</p>
          
        </div>
    </div>
  )
}

export default Login