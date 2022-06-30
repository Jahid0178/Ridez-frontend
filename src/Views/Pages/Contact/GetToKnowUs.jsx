import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const GetToKnowUs = () => {
  return (
    <>
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 py-20">
          <div>
            <h5 className="text-orange-500 text-lg font-medium tracking-widest">
              Get To Know Us
            </h5>
            <h2 className="capitalize text-4xl font-medium py-4">
              Have a project in mind? Let's talk
            </h2>
            <p className="text-lg">
              Leo duis ut diam quam nulla porttitor massa id. Cursus turpis
              massa tincidunt dui ut ornare lectus.
            </p>
          </div>
          <div>
            <div className="mb-4">
              <h4 className="text-xl font-semibold uppercase mb-3">Email</h4>
              <p>
                Support Email:{" "}
                <a
                  className="hover:text-orange-500 font-medium"
                  href="mailto:zahidul.haque767@gmail.com"
                >
                  customerservice@100percent.com
                </a>
              </p>
              <p>
                General Email:{" "}
                <a
                  className="hover:text-orange-500 font-medium"
                  href="mailto:zahidul.haque767@gmail.com"
                >
                  info@100percent.com
                </a>
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold uppercase mb-3">
                Headquaters
              </h4>
              <address>
                <p>9630 Aero Drive San Diego, CA 92123</p>
                <p>United States</p>
              </address>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <h4 className="text-xl font-semibold uppercase mb-3">
                Customer Service Hours
              </h4>
              <p>Open: 8:00 AM – Close: 18:00 PM</p>
              <p>Saturday – Sunday: Close</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold uppercase mb-3">
                Follow Us
              </h4>
              <ul>
                <li className="inline-block mr-2 border p-4 bg-black text-white hover:bg-orange-500">
                  <a href="https://www.facebook.com/jahidul.haque.01789/">
                    <FaFacebookF />
                  </a>
                </li>
                <li className="inline-block mx-2 border p-4 bg-black text-white hover:bg-orange-500">
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li className="inline-block mx-2 border p-4 bg-black text-white hover:bg-orange-500">
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetToKnowUs;
