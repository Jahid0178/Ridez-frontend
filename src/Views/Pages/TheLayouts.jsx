import React from "react";
import { Footer } from "./Common/Footer";
import { Header } from "./Common/Header";
import { Main } from "./Common/Main";

export const TheLayouts = () => {
  return (
    <div>
      <div className="bg-gray-800 text-white">
        <Header />
      </div>
      <div>
        <Main />
      </div>
      <div className="bg-gray-800 text-white py-8">
        <Footer />
      </div>
    </div>
  );
};
