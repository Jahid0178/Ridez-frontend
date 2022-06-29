import React from "react";
import Facilities from "./Facilities";
import Title from "./Title";
import WhoWeAre from "./WhoWeAre";

const About = () => {
  return (
    <div>
      <div className="bg-black text-white">
        <Title />
      </div>
      <div>
        <WhoWeAre />
      </div>
      <div>
        <Facilities />
      </div>
    </div>
  );
};

export default About;
