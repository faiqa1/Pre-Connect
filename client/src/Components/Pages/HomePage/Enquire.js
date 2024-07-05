import React from "react";
import { FaArrowRight } from "react-icons/fa";
import laptop from '../../../Images/manOnLaptop.jpeg'
export default function Enquire() {
  return (
    <div className="SectionWrapper w-full h-[400px] bg-lightblue mt-[5%]">
      <div className="w-1/2 ml-32">
        <h2 className="text-black text-2xl py-10 font-bold">
          Lorem ipsum dolor sit amet, consectetur
        </h2>
        <p className="text-black w-[45%] pb-4">
          ed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque a 
          ab illo inventore veritatis et quasi architecto beatae vitae
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit
        </p>
        <button className='text-white text-normal
         font-bold bg-blue  py-4 rounded-md mr-[15%]'>
         Enquire now
      <FaArrowRight className='mt-[-1.2rem] ml-[8rem] fill-white'/>
      </button>
      </div>
      <div>
        <img src={laptop} className="float-right mt-[-21rem] mr-[10%] w-[23%]"/>
      </div>
    </div>
  );
}
