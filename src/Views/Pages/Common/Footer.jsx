import React from "react";
import Payment from "../../../Assets/Images/Payments/payment.png";

export const Footer = () => {
  return (
    <div className="container mx-auto px-3">
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
        <div className="py-2">
          <h2 className="text-xl font-semibold mb-5">Useful Links</h2>
          <ul>
            <li className="my-3 hover:text-orange-600 cursor-pointer">
              Legal & Privacy
            </li>
            <li className="my-3 hover:text-orange-600 cursor-pointer">
              Contact
            </li>
            <li className="my-3 hover:text-orange-600 cursor-pointer">
              Gift Card
            </li>
            <li className="my-3 hover:text-orange-600 cursor-pointer">
              Customer Service
            </li>
            <li className="my-3 hover:text-orange-600 cursor-pointer">
              My Account
            </li>
            <li className="my-3 hover:text-orange-600 cursor-pointer">
              Find A Store
            </li>
          </ul>
        </div>
        <div className="py-2">
          <h2 className="text-xl font-semibold mb-5">My Account</h2>
          <ul>
            <li className="my-3 hover:text-orange-600 cursor-pointer">
              My Profile
            </li>
            <li className="my-3 hover:text-orange-600 cursor-pointer">
              My Order History
            </li>
            <li className="my-3 hover:text-orange-600 cursor-pointer">
              My Wish List
            </li>
            <li className="my-3 hover:text-orange-600 cursor-pointer">
              Order Tracking
            </li>
            <li className="my-3 hover:text-orange-600 cursor-pointer">
              Shopping Cart
            </li>
          </ul>
        </div>
        <div className="py-2">
          <h2 className="text-xl font-semibold mb-5">Company</h2>
          <ul>
            <li className="my-3 hover:text-orange-600 cursor-pointer">
              About Us
            </li>
            <li className="my-3 hover:text-orange-600 cursor-pointer">
              Career
            </li>
            <li className="my-3 hover:text-orange-600 cursor-pointer">Blog</li>
            <li className="my-3 hover:text-orange-600 cursor-pointer">
              Affiliate
            </li>
            <li className="my-3 hover:text-orange-600 cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>
        <div className="py-2 text-right">
          <h2 className="text-xl font-semibold mb-5">Connect With Us</h2>
          <div>
            <h2 className="text-xl font-semibold mb-5">Payment Method</h2>
            <img src={Payment} alt="Payment System" />
          </div>
        </div>
      </div>
    </div>
  );
};
