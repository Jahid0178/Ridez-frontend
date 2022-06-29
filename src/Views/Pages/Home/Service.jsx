import React from "react";
import ServiceImageBg from "../../../Assets/Images/service.jpg";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div style={ServiceImage}>
      <div className="container mx-auto px-3">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-8 text-white">
            <div>
              <h6 className="mb-3 text-orange-500 font-bold">
                YOUR RIDE START HERE.
              </h6>
              <h2 className="text-5xl font-semibold mb-3">
                Bike Services & Repair
              </h2>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    <span className="text-orange-500">01.</span> Tunner - up &
                    Builds
                  </h3>
                  <p>
                    Vel illum dolore eu feugiat nulla facilisis at vero eros et
                    accu qui blandit
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    <span className="text-orange-500">02.</span> Adjust and
                    install
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    <span className="text-orange-500">03.</span> Personal Bike
                    Fit
                  </h3>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    <span className="text-orange-500">04.</span> Free Delivery
                  </h3>
                  <p>
                    Vel illum dolore eu feugiat nulla facilisis at vero eros et
                    accu qui blandit
                  </p>
                </div>
                <div>
                  <Link
                    className="btn-secondary mt-24 inline-block hover:bg-white hover:text-black"
                    to="/shop"
                  >
                    Explore Product
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div></div> */}
        </div>
      </div>
    </div>
  );
};

export default Service;

const ServiceImage = {
  backgroundImage: `url(${ServiceImageBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
};
