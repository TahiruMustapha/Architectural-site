import React from 'react'
import "./Contact.css"
import PagesNav from '../../pagesNav/PagesNav'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { ImLocation2 } from "react-icons/im";
import { MdAccessTime, MdCall, MdMail } from "react-icons/md";
import { FaBlenderPhone, FaDownload, FaFilePdf, FaFileWord } from 'react-icons/fa'
const Contact = () => {
  return (
    <div>
      <PagesNav/>
      <div className="planBg projectsbg">
        <div>
          <h1>
            <span>CONTACT</span> US
          </h1>
          <div>
            <span>
              You are here: <Link to="/">Home</Link>{" "}
              <MdOutlineKeyboardDoubleArrowRight /> Contact Us{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="form">
        <div className='contact__form'>
          <h3>FILL THE CONTACT FORM</h3>

          <p className='in__toch'>Get in toch with us</p>
           <form>
            <p className='p__details'>
              <input type="text" placeholder='Your name here' />
              <input type="text" placeholder='Your email' />
              <input type="text" placeholder='Phone' />
            </p>
            <p className='form__subject'>
              <input type="text" placeholder='Subject' />
            </p>
            <p className='text__area'>
              <textarea placeholder='Your message'></textarea>
            </p>
            
            <p className='form__button '>
              <button>SEND MESSAGE</button>
            </p>
           </form>
        </div>

        <div className="contact__brochers">
          <div className="headquater">
          <h3>HEADQUARTERS</h3>
           <ul>
              <li>
                {" "}
                <ImLocation2 className="text-[#fbb600]" /> Ahenema Kokorben,
                Kumasi Ghana
              </li>
              <li>
                {" "}
                <MdCall className="text-[#fbb600]" /> (+233) 556230613
              </li>
              <li >
                {" "}
                <MdMail className="text-[#fbb600]" />
                mashaallahconstruction43@gmail.com
              </li>
              <li>
                {" "}
                <FaBlenderPhone className="text-[#fbb600]" /> (+233) 556230613
              </li>
              <li>
                {" "}
                <MdAccessTime className="text-[#fbb600]" /> Mon - Sat: 9:00 -
                18:00
              </li>
            </ul>
          </div>
          <div className="brochers">
          <h3>BROCHURES</h3>
            <p>
              {" "}
              <span className='flex items-center'><FaFilePdf className="text-[gray]" /> Download.PDF{" "}</span>
              
              <FaDownload className="text-[gray]" />
            </p>
            <p>
              {" "}
              <span className='flex items-center'><FaFileWord className="text-[gray]" /> Download.DOC{" "}</span>
              
              <FaDownload className="text-[gray]" />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
