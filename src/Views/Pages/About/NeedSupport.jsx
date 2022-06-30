import React from "react";
import { RiCustomerService2Line } from "react-icons/ri";
import { BsBicycle } from "react-icons/bs";
import BackgroundImage from "../../../Assets/Images/About/about_4.jpg";

const NeedSupport = () => {
  return (
    <div className="container mx-auto px-3">
      <div className="py-5">
        <div className="text-center">
          <h5 className="text-orange-500 font-medium tracking-wider">
            Need Support
          </h5>
          <h2 className="py-7 text-6xl font-medium">
            Try Our Special Services
          </h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col md:justify-between md:flex-row gap-4">
            <div className="text-center p-10 border-2">
              <RiCustomerService2Line className="text-8xl mx-auto my-5" />
              <h4 className="text-2xl font-semibold py-3">Customer Service</h4>
              <p className="mb-5">
                How to access your order, account, shipping information, and
                returns and exchanges.
              </p>
              <button className="btn-secondary">Learn More</button>
            </div>
            <div className="text-center p-10 border-2">
              <BsBicycle className="text-8xl mx-auto my-5" />
              <h4 className="text-2xl font-semibold py-3">Product Support</h4>
              <p className="mb-5">
                Learn what bike is right for you, sizing, valuable how-to
                information, and the resources available.
              </p>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
          <div style={NeedSupportBackground}>
            <div className="p-10 text-white">
              <h2 className="text-4xl font-medium text-orange-500">
                Take 20% Off
              </h2>
              <h2 className="text-4xl font-medium">One Full-Price Item</h2>
              <p>
                Use Code <span className="font-semibold">SPRINT20</span> For
                Year-End Holiday Shopping
              </p>
              <button className="btn-secondary mt-40">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedSupport;

const NeedSupportBackground = {
  backgroundImage: `url(${BackgroundImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
