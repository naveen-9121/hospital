import React from 'react'  
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'

import Navbar from './components/Navbar'



const App = () => {
  return (
    <div className='ma-4 sm-mx[10%]'>
      <Navbar/>
      
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/doctors' element = {<Doctors/>}/>
        <Route path = '/doctors/:spacility' element = {<Doctors/>}/>
        <Route path = '/login' element = {<Login/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
        <Route path = '/appointment/dicId' element = {<Appointment/>}/>
        <Route path = '/my-appointments' element = {<MyAppointments/>}/>
        <Route path = '/my-profile' element = {<MyProfile/>}/>

 
      </Routes>
      
    </div>
  )
}

export default App
