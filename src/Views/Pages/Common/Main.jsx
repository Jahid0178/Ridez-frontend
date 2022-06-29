import React from "react";
import { Route, Routes } from "react-router-dom";
import { Blog } from "../Blog/Blog";
import { Contact } from "../Contact/Contact";
import { Home } from "../Home/Home";
import { Shop } from "../Shop/Shop";
import { NotFound } from "./NotFound";

export const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
