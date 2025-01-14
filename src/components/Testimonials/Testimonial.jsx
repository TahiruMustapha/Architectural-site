import React from "react";
import { useState, useEffect } from "react";
import "./Testimonial.css";
import { FaStar } from "react-icons/fa";
import google from "../Testimonials/google.png";
//import office1 from "../Testimonials/office1.jpg";
import { TestmonialData } from "./TestimonialData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Testimonial = () => {
  const [testimonial, setTestimonial] = useState(0);

  const testimonialLenght = TestmonialData.length;
  const autoScroll = true;
  let slideInterval;
  const intervalTime = 4000;

  const nextSLide = () => {
    setTestimonial(testimonial === testimonialLenght - 1 ? 0 : testimonial + 1);
  };
  const prevSLide = () => {
    setTestimonial(testimonial === 0 ? testimonialLenght - 1 : testimonial - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSLide, intervalTime);
  }
  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testimonial, autoScroll, slideInterval]);

  useEffect(() => {
    setTestimonial(0);
  }, []);
  return (
    <div className="testimonial md:py-10">
      <p className="testimonialHeader">
        <h2>TESTIMONIAL</h2>
      </p>
      <div className="testimoniaInfo py-8">
        <div className="testimonialR">
          <span>
            {" "}
            <img src={google} alt="img" />{" "}
          </span>
          <p className="flex">
            <FaStar className="text-[#ffb600] text-[1.5rem]" />
            <FaStar className="text-[#ffb600] text-[1.5rem]" />
            <FaStar className="text-[#ffb600] text-[1.5rem]" />
            <FaStar className="text-[#ffb600] text-[1.5rem]" />
            <FaStar className="text-[#ffb600] text-[1.5rem]" />
          </p>

          <p className=" text-[1.8rem] font-bold text-white">Excellent</p>
          <p className="text-[1.4rem] text-white">Based on 13 Reviews</p>
        </div>
        
        <div className="slideContainer  ">
        
          <div className="mainSlide">
            {TestmonialData.map((testimo, index) => {
              return (
                <div
                  className={
                    index === testimonial
                      ? "slideContent ease-[0.5s] slide current"
                      : "slide"
                  } 
                  key={index}
                >
                  {index === testimonial && (
                    <div className="  relative">
                      <IoIosArrowBack
          className=" border-white w-8 h-8 border-radius-[50%] absolute cursor-pointer z-[999] text-white bg-transparent rounded-[50%] hover:bg-white hover:text-[gray]  arrow prev"
          onClick={nextSLide}
        />
        <IoIosArrowForward
          className=" border-white w-8 h-8 border-radius-[50%] absolute cursor-pointer z-[999] text-white  bg-transparent rounded-[50%] hover:bg-white hover:text-[gray]     arrow next"
          onClick={prevSLide}
        />
                      <div className="imgContainer ">
                        <img src={testimo.image} alt="img" />
                      </div>
                      <span className="overlay"></span>

                      <div className="cardInfo">
                        <p className="title">{testimo.name}</p>
                        <p className="desc">{testimo.desc}</p>
                        <button className="btn">Show More</button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
