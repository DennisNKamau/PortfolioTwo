import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Dennis Kamau</h2>
          <p className="text-base leading-6 ">
          I enjoy creating things that live on the internet. My journey in software development began with a keen interest in creating intuitive user experiences and has evolved into a comprehensive understanding of the entire development lifecycle.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">OCCUPATION:</span>
            Web Developer
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            KENYA
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Nairobi, KENYA
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
