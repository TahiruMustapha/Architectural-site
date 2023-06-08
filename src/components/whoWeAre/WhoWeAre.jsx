import React from "react";
import "./WhoWeAre.css";
import siteImg1 from "./imgs/siteImg1.jpeg";
//import siteImg2 from "./imgs/siteImg2.jpeg";
const WhoWeAre = () => {
  return (
    <div className="whoWeAre w-[100%]">
      <h2 className="title font-bold text-xl tracking-widest pb-2 ">
        WHO WE ARE
      </h2>

      <div className="weAreInfo flex  justify-center w-[100%] ">
        <img src={siteImg1} alt="img" className="weAreInfoImg  object-cover h-44 "/>
        <div className="weAreInfo_details1  w-[33%]">
          <h3 className="font-bold ">Masha Allah – A Tradition Of Excellence</h3>
          <p className=" p-text text-[gray]  " >
            Masha Allah is a privately owned company established by
            young-energetic individuals who are great at what we do. We have
            over two (2) years of collective experience offering the highest
            standards for safety, quality and integrity.
          </p>
          <p className=" p-text2 text-[gray] ">
            Dedicated to Excellence, we utilize innovative building
            construction, maintenance, and renovation skills to change and
            improve the way Projects are designed, managed, and built.
          </p>
          <button className="mt-5 tracking-widest cursor-pointer" >READ MORE</button>
        </div>
        <div className="weAreInfo_details21   ">
          <div >
            <div>
            <h3 className="text-white font-bold">GET YOUR</h3>
            <span className="text-white font-extrabold tracking-widest">FREE CONSULTING</span>
            <button className="text-[#ffb600] font-bold text-xs tracking-wider mt-3">CLICK HERE!</button>
            </div>
            
          </div>
          <p  className="p-text3 text-[gray] ">
            If you are confused? Do not worry. We offer free consultation to
            help you make a decision with the best creativity and quality that
            you deserve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
