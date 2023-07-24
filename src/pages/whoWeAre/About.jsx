import React from "react";
import "./About.css";
import PagesNav from "../../pagesNav/PagesNav";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { MdAccessTime, MdCall, MdMail } from "react-icons/md";
import {
  FaBlenderPhone,
  FaDownload,
  FaFilePdf,
  FaFilePowerpoint,
  FaFileWord,
  FaQuoteLeft,
} from "react-icons/fa";
import img7 from "./images/img7.jpg";
import img8 from "./images/img8.jpg";
import img3 from "./images/img3.jpg";
import { AboutData } from "./AboutData";
import { useState, useEffect } from "react";
const About = () => {
  const [content, setContent] = useState(0);
  const contentLenght = AboutData.length;
  const autoScroll = true;
  let slideInterval;
  const intervalTime = 4000;

  const nextSLide = () => {
    setContent(content === contentLenght - 1 ? 0 : content + 1);
  };
  // const prevSLide=() => {
  //     setTestimonial(content === 0 ? contentLenght - 1 : content - 1)
  //  }
  function auto() {
    slideInterval = setInterval(nextSLide, intervalTime);
  }

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content, autoScroll, slideInterval]);
  useEffect(() => {
    setContent(0);
  }, []);
  return (
    <div>
      <PagesNav />
      <div className="planBg">
        <div>
          <h1>
            <span>ABOUT</span> US
          </h1>
          <div>
            <span>
              You are here: <Link to="/">Home</Link>{" "}
              <MdOutlineKeyboardDoubleArrowRight /> Company{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="aboutInfo">
        <div className="info1">
          <div className="team">
            <p>COMPANY</p>
            <p id="teamInfo">OUR TEAM</p>
            <p id="teamInfo">CAREERS</p>
          </div>
          <div>
            <h3>CONTACT</h3>
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
              <li id="mail">
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

          <div>
            <h3>BROCHURES</h3>
            <p>
              {" "}
              <FaFilePdf className="text-[gray]" /> Download.PDF{" "}
              <FaDownload className="text-[gray]" />{" "}
            </p>
            <p>
              {" "}
              <FaFilePdf className="text-[gray]" /> Download.PDF{" "}
              <FaDownload className="text-[gray]" />{" "}
            </p>
            <p>
              {" "}
              <FaFilePdf className="text-[gray]" /> Download.PDF{" "}
              <FaDownload className="text-[gray]" />{" "}
            </p>
          </div>

          <div id="brochers2">
            <h3>BROCHURES</h3>
            <p>
              {" "}
              <FaFilePdf className="text-[gray]" /> Download.PDF{" "}
            </p>
            <p>
              {" "}
              <FaFileWord className="text-[gray]" /> Download.DOC{" "}
            </p>
            <p>
              {" "}
              <FaFilePowerpoint className="text-[gray]" /> Download.PPT{" "}
            </p>
          </div>

          <div className="tags">
            <h3>TAGS</h3>
            <ul>
              <li className=" tagText text-[#000]">Build</li>
              <li className=" tagText text-[#000]">Construction</li>
              <li className="tagText text-[#000]">Masha Allah</li>
              <li className="tagText text-[#000]">Ghana</li>
              <li className="tagText text-[#000]">Plans</li>
              <li className="tagText text-[#000]">Home</li>
            </ul>
          </div>
        </div>
        <div className="info2">
          <div className="info2Main">
            {AboutData.map((info, index) => {
              return (
                <div
                  className={
                    index === content
                      ? "aboutInfo2 ease-[2s] slide current"
                      : "slide"
                  }
                  key={index}
                >
                  {index === content && (
                    <>
                      <p className="animate__animated animate__fadeInDown">
                        {" "}
                        <FaQuoteLeft /> {info.desc}
                      </p>
                      <p className=" animate__animated animate__fadeInTopLeft text-[black] font-bold">{info.director}</p>
                      <p className="animate__animated animate__fadeInTopRight">{info.rank}</p>
                    </>
                  )}
                </div>
              );
            })}
          </div>
          <div className="aboutSec">
            <h3 className="aboutHeaders">ABOUT US</h3>
            <p>
              Masha Allah is a privately owned company established by
              young-energetic individuals who are great at what we do. <br />
              We have over two (2) years of collective experience offering the
              highest standards for safety, quality, and integrity. Dedicated to
              Excellence, we utilize innovative building construction,
              maintenance, and renovation skills to change and improve the way
              Projects are designed, managed, and built.
            </p>
          </div>
          <div className="aboutMission">
            <h3 className="aboutHeaders">OUR MISSION</h3>
            <div className="aboutMission__content">
              <div>
                <button>VISION</button>
                <p>
                  Our Vision is to be one of the prestigious Building
                  Construction organizations providing lasting edifice for our
                  clients all over Africa, with world-class technology at a
                  competitive cost.
                </p>
              </div>
              <div>
                <button>MISION</button>
                <p>
                  Our mission as an organization is to bridge the gap between
                  Africa and the western world in terms of quality product,
                  service delivery.
                </p>
                <p>
                  We keep a strong position by always leveling up and pushing to
                  find new techniques, processes, products, and services that
                  will provide value to exceed the expectation of our clients.
                </p>
              </div>
              <div>
                <button>VALUES</button>
                <p>
                  We are dedicated to providing quality & professional Building
                  Construction in an environment of integrity and trust. We
                  commit to fulfilling all contractual obligations and strive to
                  exceed the expectations of our customers.
                </p>
              </div>
            </div>
            <div className="safety">
              <div>
                <img src={img7} alt="img" />
                <button>SAFETY</button>
                <p>
                  Safety is the most important of our core values. It is our
                  first priority during every work day.
                </p>
              </div>
              <div>
                <img src={img8} alt="img" />
                <button>SUSTAINABILITY</button>
                <p>
                  Masha Allah’s commitment to green building and sustainability is
                  long-standing.
                </p>
              </div>
              <div>
                <img src={img3} alt="img" />
                <button>COMMUNITY</button>
                <p>
                  Involvement in and support of the community are at the heart
                  of our company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aimContact about__contact">
             <p>Want to hire a professional constructor for your project?</p>
             <button> <Link to={'/contactUs'}>Contact Us</Link>  <MdOutlineKeyboardDoubleArrowRight/> </button>
   </div>
    </div>
  );
};

export default About;
