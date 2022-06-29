import React from "react";
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
    </div>
  );
};

export default About;
