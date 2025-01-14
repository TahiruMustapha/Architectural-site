import React from "react";
import "./News.css";
import { FaUserAlt } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { GoArrowSmallDown, GoArrowSmallRight } from "react-icons/go";
import img10 from "./images2/img10.webp";
const News = () => {
  return (
    <div className="newsLetter">
      <div className="newOverlay">
        <h2>LATEST NEWS</h2>
      </div>
      <div className="newsInfo2">
        <div className="newsLeftSide">
          <div className="newsheader">
            <h3>WHY CHOOSE US?</h3>
          </div>
          <div className=" newsDesign flex">
            <span>
              {" "}
              <GoArrowSmallDown className="cursor-pointer" />{" "}
            </span>
            <p>We Are Creative</p>
          </div>
          <p className="newsDesignInfo">
            As a leader in our industry, we have always worked to develop
            advanced technology and innovative methods.
          </p>
          <div className="newsDesignInfo2">
            <span>
              {" "}
              <GoArrowSmallRight />{" "}
            </span>
            <p>Honest And Dependable</p>
            
          </div>
          <div className="newsDesignInfo2">
            <span>
              {" "}
              <GoArrowSmallRight />{" "}
            </span>
            <p>Quality And Commitment</p>
          </div>
          <div className="newsDesignInfo2">
            <span>
              {" "}
              <GoArrowSmallRight />{" "}
            </span>
            <p>We Are Always Improving</p>
          </div>
        </div>
        <div className="newsRightSide">
          <div className="newsheader">
            <h3>LATEST NEWS</h3>
          </div>
          <div className=" dates flex">
            <img src={img10} alt="img" />
            <div>
              <p className="ml-4 md:text-sm text-[#808080c2]">
                Things to consider before building a house in <br /> Ghana.
              </p>

              <div className=" newsDate mt-2">
                <p className="text-[#808080c2] ml-4 flex items-center justify-between">
                  {" "}
                  <FaUserAlt /> <span className="md:text-sm">Dun1</span>{" "}
                </p>
                <p className="text-[#808080c2] ml-4 md:text-sm">Nov 1, 2022</p>
                <p className="text-[#808080c2] md:text-sm flex  items-center justify-between ml-4">
                  {" "}
                  <RiMessage2Fill /> <span>No response</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
