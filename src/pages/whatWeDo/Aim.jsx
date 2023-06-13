import React from 'react'
import './Aim.css'
import PagesNav from '../../pagesNav/PagesNav'
import { Link } from 'react-router-dom'
//import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
const Aim = () => {
  return (
    <div>
      <PagesNav/>
      <div className="planBg">
      <div>
        <h1><span>OUR</span> SERVICES</h1>
        <div>
          <span>You are here: <Link to='/'>Home</Link> <MdOutlineKeyboardDoubleArrowRight/> Services </span>
        </div>
      </div>
    </div>
      <div className="aimInfo">
      
        <div className="aimleft">
            
            <div>
            <h2>Our Services</h2>
            <h3>Architectural Design</h3>
            <p>Buldng Design</p>
            <p>Interior Design</p>
            <p>Structural Design</p>
            <p>3D Visualization</p>
            </div>
           
            <div>
            <h3>Roof Instalation</h3>
            <p>Residential</p>
            <p>Industrial</p>
            </div>
            
            <div>
            <h3>Plumbing Instalation</h3>
            <p>Residential</p>
            <p>Industrial</p>
            </div>
           
            <div>
            <h3>Building Construction</h3>
            <p>Residential Construction</p>
            <p>Commercial Construction</p>
            </div>
        
            <div>
            <h3>Electrical Installation</h3>
            <p>Residential</p>
            <p>Industrial</p>
            </div>

            <div>
              <h3>Other Services</h3>
              <p>Terrazzo & Tiles Expert</p>
               <p>Demolishing Building</p>
               <p>Renovation</p>

            </div>
           
           </div>
           <div className="aimContact">
             <p>Want to hire a professional constructor for your project?</p>
             <button>Contact Us <MdOutlineKeyboardDoubleArrowRight/> </button>
   </div>
        </div>
       
       
     
    </div>
  )
}

export default Aim
