import React from "react";
import ServiceImageBg from "../../../Assets/Images/service.jpg";
const Service = () => {
  return (
    <div className={ServiceImage}>
      <div className="container mx-auto px-3">
        <h1>Services</h1>
      </div>
    </div>
  );
};

export default Service;

const ServiceImage = {
  backgroundImage: `url(${ServiceImageBg})`,
};
