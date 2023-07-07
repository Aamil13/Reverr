import React from 'react'
import { Navigate, Route, Routes} from 'react-router-dom'
import Reagister from './Pages/Reagister'
import Tally from './Pages/Tally'
import Login from './Pages/Login'
import { useSelector } from 'react-redux'

const App = () => {
  const isloged = useSelector((state)=> state.user.isLogged)


  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Reagister/>} />
     
        <Route path="/" element={ isloged ? <Tally/> :  <Navigate replace to="/login" />} /> :
       
   
      
    </Routes>
  )
}

export default App