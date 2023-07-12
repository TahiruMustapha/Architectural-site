import React from "react";
import "./Footer.css";
import {ImLocation2} from "react-icons/im"
import {MdAccessTime, MdCall, MdMail} from "react-icons/md"
import { FaBlenderPhone, FaFacebook, FaHome, FaInstagram, FaRegHandPointRight, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="mainFooter">
      <div className="footerContent">
        <div className="aboutUs">
          <h3 className="text-white">ABOUT US</h3>
          <div className="mark set1">
            <div>
              <p>
                <FaHome />
              </p>
            </div>
            <h2>
              Masha Allah <br /> <span>Construction</span>
            </h2>
          </div>
          <p>
            Dunnock Associates is a privately owned company established by
            young-energetic individuals who has great at what we do..
          </p>
          <div className="socialLinks">
            <FaFacebook/>
            <FaInstagram/>
            <FaTwitter/>
            
          </div>
        </div>

        <div className="information">
          <h3 className="text-white">INFORMATION</h3>
            <div>
            <ul>
            <li className="ease-in-out duration-500 hover:text-[#ffb600] hover:translate-x-3"> <FaRegHandPointRight/> <Link to={'/'}>Home</Link> </li>
                <li className="ease-in-out duration-500 hover:text-[#ffb600] hover:translate-x-3"> <FaRegHandPointRight/><Link to='/whoWeAre' >Company</Link></li>
                <li className="ease-in-out duration-500 hover:text-[#ffb600] hover:translate-x-3"> <FaRegHandPointRight/><Link to='/contactUs' >Contact Us</Link></li>
                <li className="ease-in-out duration-500 hover:text-[#ffb600] hover:translate-x-3"> <FaRegHandPointRight/><Link to='/gallery' >Gallery</Link></li>
             </ul>
             <ul>
                <li className="ease-in-out duration-500 hover:text-[#ffb600] hover:translate-x-3"> <FaRegHandPointRight/><Link to='/planForSale' >Plan For Sale</Link></li>
                <li className="ease-in-out duration-500 hover:text-[#ffb600] hover:translate-x-3"> <FaRegHandPointRight/><Link to='/projects' >Projects</Link></li>
                <li className="ease-in-out duration-500 hover:text-[#ffb600] hover:translate-x-3"> <FaRegHandPointRight/>Our Team</li>
             </ul> 
            </div>
             
        </div>

        <div className="office">
        <h3 className="text-white">MASHA ALLAH CONSTRUCTION OFFICE</h3>

        <ul>
            <li> <ImLocation2/> Ahenema Korkoben, Kumasi Ghana</li>
            <li> <MdCall/> 0556230613</li>
            <li> <MdMail/> mashaallah45@gmail.com</li>
            <li> <FaBlenderPhone/> 0556230513</li>
            <li> <FaBlenderPhone/> 0556230513</li>
            <li> <MdAccessTime/>Mon-Sat: 8:00am - 6:00pm</li>
        </ul>
        </div>
      </div>
      <div className="developer">
        <p>Copyright 20203 &copy; Masha Allah Construction Ltd. Developed by Mustapha Tahiru. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
