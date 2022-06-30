import React from "react";
import PageTitle from "../Common/PageTitle";
import Facilities from "./Facilities";
import NeedSupport from "./NeedSupport";
import Story from "./Story";
import WhoWeAre from "./WhoWeAre";

const Title = "About Us";

const About = () => {
  return (
    <div>
      <div className="bg-black text-white">
        <PageTitle title={Title} />
      </div>
      <div>
        <WhoWeAre />
      </div>
      <div>
        <Facilities />
      </div>
      <div>
        <Story />
      </div>
      <div>
        <NeedSupport />
      </div>
    </div>
  );
};

export default About;
