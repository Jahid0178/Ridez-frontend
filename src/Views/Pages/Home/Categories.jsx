import React from "react";
import { Link } from "react-router-dom";
import BannerOne from "../../../Assets/Images/banner1.jpg";
import BannerTwo from "../../../Assets/Images/banner2.jpg";
import BannerThree from "../../../Assets/Images/banner3.jpg";

const Categories = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3">
        <div
          style={Banner1}
          className="text-white flex flex-col justify-between"
        >
          <div>
            <h2 className="text-5xl font-semibold">Singletrack Speed</h2>
            <p className="mt-3">The All-New Trance Advance Pro 29 Series</p>
          </div>
          <div>
            <button className="btn-secondary hover:bg-black transition-all">
              Learn More
            </button>
          </div>
        </div>
        <div
          style={Banner2}
          className="text-white flex flex-col justify-between"
        >
          <div>
            <h2 className="text-5xl font-semibold">Trail Power</h2>
            <p className="mt-3">25% Off Trance X Advance E+</p>
          </div>
          <div>
            <button className="btn bg-white text-black hover:bg-orange-500 hover:text-white transition-all">
              Discover Now
            </button>
          </div>
        </div>
        <div
          style={Banner3}
          className="text-white flex flex-col justify-between"
        >
          <div>
            <h2 className="text-5xl font-semibold">Road Bikes</h2>
            <p className="mt-3">New Styles Just Got In</p>
          </div>
          <div>
            <Link
              to="/shop"
              className="btn-secondary hover:bg-black transition-all"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

const Banner1 = {
  backgroundImage: `url(${BannerOne})`,
  backgroundRepeat: "no-repeat",
  height: "370px",
  backgroundSize: "cover",
  padding: "50px",
};

const Banner2 = {
  backgroundImage: `url(${BannerTwo})`,
  backgroundRepeat: "no-repeat",
  height: "370px",
  backgroundSize: "cover",
  padding: "50px",
};

const Banner3 = {
  backgroundImage: `url(${BannerThree})`,
  backgroundRepeat: "no-repeat",
  height: "370px",
  backgroundSize: "cover",
  padding: "50px",
};
