import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import { Blog } from "../Blog/Blog";
import { Contact } from "../Contact/Contact";
import { Home } from "../Home/Home";
import OurTeam from "../OurTeam/OurTeam";
import { Shop } from "../Shop/Shop";
import { NotFound } from "./NotFound";

export const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
