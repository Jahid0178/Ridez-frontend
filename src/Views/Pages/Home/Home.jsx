import React from "react";
import Help from "../../Components/Common/Help";
import Categories from "./Categories";
import ProductCat from "./ProductCat";
import Service from "./Service";

export const Home = () => {
  return (
    <>
      <div>
        <Categories />
      </div>
      <div>
        <ProductCat />
      </div>
      <div>
        <Service />
      </div>
      <div>
        <Help />
      </div>
    </>
  );
};
