import React from 'react'
import "./Contact.css"
import PagesNav from '../../pagesNav/PagesNav'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
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
    </div>
  )
}

export default Contact
