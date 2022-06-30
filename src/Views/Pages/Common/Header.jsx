import React from "react";
import { GrSearch } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/Images/Logo/logo.svg";

export const Header = () => {
  return (
    <div className="container mx-auto px-3">
      <nav className="flex justify-between items-center py-5">
        <div>
          <ul>
            <li className="inline-block mr-5">
              <Link to="/">Home</Link>
            </li>
            <li className="inline-block mx-5">
              <Link to="/about">About</Link>
            </li>
            <li className="inline-block mx-5">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="inline-block mx-5">
              <Link to="/team">Our Team</Link>
            </li>
            <li className="inline-block mx-5">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="inline-block mx-5">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <img src={Logo} alt="Ridez Logo" />
        </div>
        <div>
          <ul>
            <li className="inline-block mr-5">
              <GrSearch className="text-xl" />
            </li>
            <li className="inline-block mx-5">
              <IoPersonOutline className="text-xl" />
            </li>
            <li className="inline-block mx-5">
              <AiOutlineHeart className="text-xl" />
            </li>
            <li className="inline-block mx-5">
              <BsBag className="text-xl" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
