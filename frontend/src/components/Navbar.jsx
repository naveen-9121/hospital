import React, {useState} from 'react';
import{NavLink,useNavigate} from 'react-router-dom';
import {assets} from '../assets/assets_frontend/assets'

const Navbar = () => {
   
  const navigate = useNavigate(); // Initialize the navigate function

  const [showMenu,setShowMenu] = useState(false);
  const [token,setToken] = useState(true);



  return (
    <div className = "flex items-center justify-between text-sm p-4 mb-5 border-b border-bg-gray-400 ">
      <img  className = "w-40 cursor-pointer" src = {assets.logo} />
      <ul className = 'hidden md:flex items-start gap-5 font-medium '>
        <NavLink to = '/'>
          <l1 className = 'py-1'>HOME</l1>
          <hr className = 'boder-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>

        <NavLink to = '/doctors'>
          <l1 className = 'py-1'>ALL DOCTORS</l1>
          <hr className = 'boder-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>

        <NavLink to ='/about'>
          <l1 className = 'py-1'>ABOUT</l1>
          <hr className = 'boder-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>

        <NavLink to ='/contact'>
          <l1 className = 'py-1'>CONTACT</l1>
          <hr className = 'boder-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>
      <div className = "flex-item-center gap-4">

      {token
          ?<div className = "flex items-center gap-2 cursor-pointer group relative">
            <img  className = 'w-8 rounded-full' src = {assets.profile_pic}/>
            <img className = 'w-2.5 ' src = {assets.dropdown_icon}/>
            
            <div className = 'absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className = 'min-w-48 bg-stone-100 rounded flexflex-col gap-4 p-4'>
                <p onClick ={()=> navigate('my-profile') }  className = 'hover:text-black cursor-pointer' >My Profile</p>
                <p  onClick ={()=> navigate('my-appointments') }   className = 'hover:text-black cursor-pointer'>My Appointmentes</p>
                <p onClick ={()=> setToken(false)} className = 'hover:text-black cursor-pointer'>Log Out</p>
              </div>
            </div>

          </div>
          : 
       <a href = '/login'  className  =' bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block' >Create Account</a>
}
      </div>
    </div>
    
  );
};

export default Navbar;