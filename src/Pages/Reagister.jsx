import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signUP } from '../Store/user';
import { useNavigate } from 'react-router-dom';

const Reagister = () => {
  const [email ,setEmail] = useState('');
  const [password ,setPassword] = useState('');

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault();
    let data = {email,password}
    // console.log(data);

    try {
     
     let res =await  dispatch(signUP(data))
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
        <p style={{backgroundColor:"white",textAlign:"center"}}>Sign-UP</p>
       
       <form className='inputcontainer' onSubmit={handleSubmit}>
       <input className='inputs' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' type="email"  />
        <input className='inputs' onChange={(e)=>setPassword(e.target.value)} placeholder='Password' type="password"  />
        <button>Submit</button>
       </form>

       <p onClick={()=>navigate("/login")} style={{backgroundColor:"white",textAlign:"center",cursor:"pointer"}}>Back To Login</p>
      
    </div>
</div>
  )
}

export default Reagister