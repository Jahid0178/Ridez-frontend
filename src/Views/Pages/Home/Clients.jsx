import React from "react";
import BrandOne from "../../../Assets/Images/Clients/brand01.svg";
import BrandTwo from "../../../Assets/Images/Clients/brand02.svg";
import BrandThree from "../../../Assets/Images/Clients/brand03.svg";
import BrandFour from "../../../Assets/Images/Clients/brand04.svg";
import BrandFive from "../../../Assets/Images/Clients/brand05.svg";

const Clients = () => {
  return (
    <div className="bg-orange-600 py-5">
      <div className="container mx-auto px-3">
        <div className="grid sm:grid-cols-1 md:grid-cols-5">
          <img className="mx-auto" src={BrandOne} alt="Brand1" />
          <img className="mx-auto" src={BrandTwo} alt="Brand2" />
          <img className="mx-auto" src={BrandThree} alt="Brand3" />
          <img className="mx-auto" src={BrandFour} alt="Brand4" />
          <img className="mx-auto" src={BrandFive} alt="Brand5" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
