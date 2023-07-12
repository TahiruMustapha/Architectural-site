import React from 'react'
import { FaClock, FaFacebook, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import './PagesNav.css'
import { FaHome,FaSearch,FaCartPlus,FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const PagesNav = () => {
const [overlay, setOverlay] = useState(false);
const [toggleState,setToggleState] = useState(1);
const toggleTab = (index)=>{
    setToggleState(index);
}
const [nav,setNav] = useState(false);
const handleNav = () => {
    setNav(prev => !prev)
  }
  return (
    <div className='pagesNav'>
    
        <div className="pagesNav1">

            <div>
               
               <p>
                <FaPhone/> 0556230513
               </p>
               <p>
                <FaClock/> Mon - Sat:6:00 - 5:00
               </p>
               <p>
                <FaMailBulk/> tahirumustapha13@gmail.com
               </p>
            </div>
            <div>
                <FaFacebook/>
                <FaTwitter/>
                <FaInstagram/>
            </div>
        </div>
        <div className="set1 pageNavLogo " >
                <div>
                    <p><FaHome/></p>
                </div>
                <h2>Masha Allah <br /> <span>Construction</span></h2>
            </div>
         <div className={nav ? "mobileNav fixed left-0 top-10 h-full w-[90%] ease-in-out duration-500" : "fixed left-[-100%]"}>
                
                <ul className=' mobileNavList pt-5 uppercase bg-white'>
                <li className='p-4 border-b' onClick={handleNav}> <Link to='/'>Home</Link></li>
                     <li className='p-4 border-b' onClick={handleNav}> <Link to='/planForSale'>Plan For Sale</Link></li>
                     <li className='p-4 border-b' onClick={handleNav}> <Link to='/whatWeDo'>What We Do</Link></li>
                     <li className='p-4 border-b' onClick={handleNav}> <Link to='/whoWeAre'>Who We Are</Link></li>
                     <li className='p-4 border-b' onClick={handleNav}> <Link to='/projects'>Projects</Link></li>
                     <li className='p-4 border-b' onClick={handleNav}> <Link to='/gallery'>Gallery</Link></li>
                     <li className='p-4'> <Link to='/contactUs' onClick={handleNav}>Contact Us</Link></li>
                </ul>

           </div> 
         <div className="pagesNav2">
         
            <div className="pagesNavItems">
                <ul>
                    <li className={toggleState === 1 ? "tabs active-tab" : "tabs"}
                     onClick={()=>toggleTab(1)}
                    > <Link to='/'>HOME</Link></li>
                    <li className={toggleState === 2 ? "tabs active-tab" : "tabs"}
                     onClick={()=>toggleTab(2)}
                    > <Link to='/planForSale'>PLANS FOR SALE</Link></li>
                    <li className={toggleState === 3 ? "tabs active-tab" : "tabs"}
                    onClick={()=>toggleTab(3)}
                    > <Link to='/whatWeDo'>WHAT WE DO</Link></li>
                    <li className={toggleState === 4 ? "tabs active-tab" : "tabs"}
                    onClick={()=>toggleTab(4)}
                    > <Link to='/whoWeAre'>WHO WE ARE</Link></li>
                    <li className={toggleState === 5 ? "tabs active-tab" : "tabs"}
                    onClick={()=>toggleTab(5)}
                    > <Link to='/projects'>PROJECTS</Link></li>
                    <li className={toggleState === 6 ? "tabs active-tab" : "tabs"}
                    onClick={()=>toggleTab(6)}
                    > <Link to='/gallery'>GALLERY</Link></li>

                </ul>
            </div>
            <div className='mainSet1'>

            <div className="set1">
                <div>
                    <p><FaHome/></p>
                </div>
                <h2>Masha Allah <br /> <span>Construction</span></h2>
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

            </div>

            <div className="contactList">
                <p> <Link to='/contactUs'>CONTACT</Link></p>
            </div>
                  
         </div>
         <p onClick={handleNav} className='menu2  block md:hidden'>
            {nav ? <AiOutlineClose/>: < AiOutlineMenu /> }
            </p>
        
    </div>
  )
}

export default PagesNav
