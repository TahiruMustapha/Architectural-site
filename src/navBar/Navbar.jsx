import React from 'react'
import { useState } from 'react';
import "./Navbar.css"
import { FaFacebook,FaInstagram,FaTwitter,FaHome,FaPhone, FaSearch, FaCartPlus, FaTimes,} from 'react-icons/fa';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {Link} from 'react-router-dom'
const Navbar = () => {
    const [overlay, setOverlay] = useState(false);
    const [toggleState,setToggleState] = useState(1);
    const toggleTab = (index)=>{
        setToggleState(index);
    }
    const [nav,setNav] = useState(false);
    const handleNav = ()=>{
        setNav(!nav);
    }
  return (
    <div className='app__navbar'>
        <div className="topNav">
            <div className="topNav__socials">
            <p><FaFacebook/></p>
            <p><FaInstagram/></p>
            <p><FaTwitter/></p>
            </div>
            
            
            
        </div>
        <div className="nextNav">
            <div className="set1">
                <div>
                    <p><FaHome/></p>
                </div>
                <h2>Masha Allah <br /> <span>Construction</span></h2>
            </div>
            <div className="set2">
            <div>
                    <p><FaPhone/></p>
                    <h2>0556230613</h2>
                </div>
                    <span>tahirumustapha13@gmail.com</span>
            </div>
            <div className="set3">
            <div>
                    <p><FaHome/></p>
                    <h2>Kumasi Ahenema Kokorben,<br /> NoB156/19</h2>
                </div>
                <span>Kumasi, Ghana.</span>
            </div>
            <div className="set4">
                <div>
                    <p onClick={()=> setOverlay(!overlay)}>
                    {
                        overlay ? <FaTimes/> : <FaSearch/>
                    }
                    </p>
                    
                    <input id='search' className={` ${overlay ? "showSearch" : "hideSearch"}`} type="text" placeholder='Search' />
                    <p><FaCartPlus/></p>
                </div>
            </div>
            <div className="set1 pageNavLogo mobile__logo " >
                <div>
                    <p><FaHome/></p>
                </div>
                <h2>Masha Allah <br /> <span>Construction</span></h2>
            </div>
            <p onClick={handleNav} className='menu text-white block md:hidden'>
            {!nav ? <AiOutlineClose/>: < AiOutlineMenu /> }
           
            
            </p>
            
        </div>
        <div className="navItems hidden md:block">
            <ul>
                <li  className={toggleState === 1 ? "tabs active-tab" : "tabs"}
                onClick={()=>toggleTab(1)}
                > <Link to='/' >Home</Link></li>
                <li className={toggleState === 2 ? "tabs active-tab" : "tabs"}
                onClick={()=>toggleTab(2)}
                > <Link to='/planForSale'> Plan For Sale</Link></li>
                <li className={toggleState === 3 ? "tabs active-tab" : "tabs"}
                onClick={()=>toggleTab(3)}
                > <Link to='/whatWeDo'>What We Do</Link></li>
                <li className={toggleState === 4 ? "tabs active-tab" : "tabs"}
                onClick={()=>toggleTab(4)}
                > <Link to='/whoWeAre'>Who We Are</Link> </li>
                <li className={toggleState === 5 ? "tabs active-tab" : "tabs"}
                onClick={()=>toggleTab(5)}
                > <Link to='/projects'>Projects</Link></li>
                <li className={toggleState === 6 ? "tabs active-tab" : "tabs"}
                onClick={()=>toggleTab(6)}
                > <Link to='/gallery'>Gallery</Link></li>
                <li className={toggleState === 7 ? "tabs active-tab" : "tabs"}
                onClick={()=>toggleTab(7)}
                > <Link to='/contactUs'>Contact Us</Link></li>
            </ul>
        </div>
        <div className={!nav ? "mobileNav fixed left-0 top-8 h-full w-[90%] ease-in-out duration-500" : "fixed left-[-100%]"}>
       
                 <ul className=' mobileNavList pt-5 uppercase bg-white'  >
                     <li className='p-4 border-b' onClick={handleNav} > <Link to='/' >Home</Link></li>
                     <li className='p-4 border-b' > <Link to='/planForSale' >Plan For Sale</Link></li>
                     <li className='p-4 border-b' > <Link to='/whatWeDo' >What We Do</Link></li>
                     <li className='p-4 border-b' > <Link to='/whoWeAre' >Who We Are</Link></li>
                     <li className='p-4 border-b' > <Link to='/projects' >Projects</Link></li>
                     <li className='p-4 border-b' > <Link to='/gallery' >Gallery</Link></li>
                     <li className='p-4' > <Link to='/contactUs' >Contact Us</Link></li>
                 </ul>

            </div>
    </div>
  )
}

export default Navbar
