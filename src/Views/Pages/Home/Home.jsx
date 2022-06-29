import React from "react";
import Help from "../../Components/Common/Help";
import Categories from "./Categories";
import Clients from "./Clients";
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
        <Clients />
      </div>
      <div>
        <Help />
      </div>
    </>
  );
};
