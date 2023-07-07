import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./tally.css"
import { signOUT } from '../Store/user';
import{addNew} from "../Store/counterSlice"
import Counter from '../component/Counter';

const Tally = () => {
  const user = useSelector((state)=> state.user)
  const state = useSelector((state)=> state.counter)
  const dispatch = useDispatch()

  const handleAdd = ()=>{
    dispatch(addNew())
  }
  return (
    <div>
      <div className='header'>
      <h5 style={{textAlign:"center"}}>Welcome user {user?.user?.user?.email}</h5>
      <button onClick={()=>dispatch(signOUT())}>Log-Out</button>
      <div >
      <div className='addbut' >
        <button  onClick={handleAdd}>Add Counter</button>
      </div>
    <div className='counter-div' >
      {state.length ? state.map((item,index)=>(
        <Counter key={index} item={item} idx={index}/>
      ))
    :
    <h1 > Please Add Coutner to Start</h1>
    }
    </div>
    </div>
      </div>
      
    </div>
  )
}

export default Tally