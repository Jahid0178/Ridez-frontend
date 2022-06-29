import React from "react";
import BannerOne from "../../../Assets/Images/banner1.jpg";
import BannerTwo from "../../../Assets/Images/banner2.jpg";
import BannerThree from "../../../Assets/Images/banner3.jpg";
import Help from "../../Components/Common/Help";
import ProductCat from "./ProductCat";
import Service from "./Service";

export const Home = () => {
  return (
    <>
      <div>
        {/* Elementor Section */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3">
          <div>
            <img className="w-full" src={BannerOne} alt="" />
          </div>
          <div>
            <img className="w-full" src={BannerTwo} alt="" />
          </div>
          <div>
            <img className="w-full" src={BannerThree} alt="" />
          </div>
        </div>
      </div>
      <div>
        <ProductCat />
      </div>
      <div>
        <Service />
      </div>
      <div>
        <Help />
      </div>
    </>
  );
};
