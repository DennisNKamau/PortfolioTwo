import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="I build fast, responsive, and user-friendly websites that deliver real results. My focus is on clean code, modern design, and seamless user experiences whether it's a simple landing page or a Full-scale web application."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Graphic Design"
        subTitle="I create visually compelling designs that bring brands to life. From logos to full brand identities, my work blends creativity, clarity, and strategy ensuring every design communicates a message and leaves a lasting impression."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Mobile Application"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="SEO"
        subTitle="I help websites get discovered. My SEO approach focuses on improving visibility, increasing traffic, and boosting rankings using ethical, data-driven strategies."
      />
    </div>
  );
};

export default MyServices;
