import { createSlice } from "@reduxjs/toolkit";
//create slice takes three thing
//initialState
//string identifier
//reducer function

const initialState = [
    {
        value:0,
        name: 'Tally Counter'
    }
]

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment: (state,action)=>{
            // console.log(state.value)
            state[action.payload].value += 1
        },
        decrement: (state,action) =>{
            // state.value -= 1
            state[action.payload].value -= 1
        },
        reset:(state,action)=>{
            state[action.payload].value = 0
        },
        startValue: (state, action) =>{
            //state.value += action.payload
            const {idx, val} = action.payload
            state[idx].value = Number(val)
        },
        startName: (state, action) =>{
            //state.value += action.payload
            const {idx, val} = action.payload
            state[idx].name = val
        },
        addNew: (state)=>{
            state.push({value:0, name:'Tally Counter'})
        },
        remove: (state, action)=>{
            state.splice(action.payload, 1)
        }
    }
})

//Action will be genereate for eact reducer case
export const {increment, decrement, reset, startValue, startName, addNew, remove} = counterSlice.actions

export default counterSlice.reducer