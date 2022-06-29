import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../../Assets/Images/About/about.png";
import Cover from "../../../Assets/Images/About/about_1.jpg";

const WhoWeAre = () => {
  return (
    <div className="container mx-auto px-3">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 py-10 gap-5">
        <div style={BackgroundCover}>
          <img src={Banner} alt="Banner About US" />
        </div>
        <div>
          <div>
            <h5 className="text-orange-500 text-lg font-semibold mb-4">
              Who We Are
            </h5>
            <h2 className="text-6xl font-semibold mb-4">
              The Best Bicycling Experience
            </h2>
            <p className="text-lg font-medium">
              Shop and buy from our huge selection of mountain bike parts and
              accessories all with free shipping to the US and cheap worldwide
              shipping.
            </p>
            <Link to="#" className="btn-secondary inline-block mt-6">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;

const BackgroundCover = {
  backgroundImage: `url(${Cover})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
