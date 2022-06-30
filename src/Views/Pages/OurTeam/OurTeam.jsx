import React from "react";
import PageTitle from "../Common/PageTitle";
import TeamMember from "./TeamMember";

const Title = "Our Team";

const OurTeam = () => {
  return (
    <div>
      <div className="bg-black text-white">
        <PageTitle title={Title} />
      </div>
      <div>
        <TeamMember />
      </div>
    </div>
  );
};

export default OurTeam;
