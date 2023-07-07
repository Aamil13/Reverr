import React, { useState } from 'react'
import { increment, decrement, reset, startValue, startName, remove } from '../Store/counterSlice'
import { useDispatch } from 'react-redux'

const Counter = ({idx, item}) => {
    const [showVal, setShowVal] = useState(false)
    const [showName, setShowName] = useState(false)
    const [name, setName] = useState(item?.name)
    const [value, setValue] = useState(item?.value)

    const dispatch = useDispatch()

    const handleName = () =>{
        dispatch(startName({idx, val:name}))
        setShowName(false)
    }
    const handleValue = () =>{
        dispatch(startValue({idx, val:value}))
        setShowVal(false)
    }
    const handleRemove = () =>{
      dispatch(remove(idx))
    }

    const handleReset = () =>{
      dispatch(reset(idx))
    }

    const handleIncrement = () =>{
      dispatch(increment(idx))
    }
    const handleDecrement = () =>{
      dispatch(decrement(idx))
    }

  return (
    <div className='counter'>
      <div >
        <button  onClick={handleRemove}>x</button>
      </div>
    <h4>{item?.name}</h4>
    <div >
      <input type='text'  value={item?.value}/>
    </div>
    <div >
      <button className='incdecbtn' onClick={handleDecrement}>-</button>
      <button className='incdecbtn' onClick={handleIncrement}>+</button>
    </div>
    <div >
      <div>
        <button  onClick={handleReset}>Reset Counter</button>
      </div>
      <div >
        {showVal ?
        <div >
            <input type='number'  value={value} onChange={e => setValue(e.target.value)}/>
            <button  onClick={handleValue}>Set</button>
        </div>
        
        :
        <button  onClick={()=>setShowVal(prev => !prev)}>Start Value</button>
        }
      </div>
      <div>
        {showName ?
        <div >
        <input type='text'  value={name} onChange={e => setName(e.target.value)}/>
        <button  onClick={handleName}>Set</button>
        </div>
        :
        <button  onClick={()=> setShowName(prev => !prev)}>Counter Name</button>
        }
      </div>
    </div>
    </div>
  )
}

export default Counter