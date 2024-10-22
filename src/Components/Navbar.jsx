import React from 'react'
import "../Styles/NavStyle.css";
const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
           <div className='div1'><p>WEATHER APP</p> </div> 
           <div className='div2'>
            <p>{new Date().toLocaleDateString()}</p>
           
            </div>
            </div>
    </div>
  )
}

export default Navbar;
