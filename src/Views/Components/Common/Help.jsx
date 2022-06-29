import React from "react";
import { RiMessage2Line } from "react-icons/ri";
import { TbPhoneCall } from "react-icons/tb";
import { RiMailAddLine } from "react-icons/ri";
import FooterImg from "../../../Assets/Images/Footer/Footer_BG.jpg";

const Help = () => {
  return (
    <div style={footerImg}>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 justify-center items-center">
        <div className="px-10 py-20">
          <div className="text-center">
            <RiMessage2Line className="text-5xl mx-auto text-orange-500 mb-3" />
            <h2 className="text-3xl font-semibold py-3">Need Help?</h2>
            <p>Our dedicated team are here to help.</p>
            <button className="btn-primary mt-5">Chat Now</button>
          </div>
        </div>
        <div className="px-10 py-20">
          <div className="text-center">
            <TbPhoneCall className="text-5xl mx-auto text-orange-500 mb-3" />
            <h2 className="text-3xl font-semibold py-3">Call Us</h2>
            <p>Talk to our team 24/7 about your needs.</p>
            <p className="text-2xl text-orange-500 font-semibold mt-5">
              666 - 880 - 33388
            </p>
          </div>
        </div>
        <div className="px-10 py-20">
          <div className="text-center">
            <RiMailAddLine className="text-5xl mx-auto text-orange-500 mb-3" />
            <h2 className="text-3xl font-semibold py-3">Subscribe Us</h2>
            <p>And get the scoop on sales & new gear!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;

const footerImg = {
  backgroundImage: `url(${FooterImg})`,
  color: "#fff",
};
