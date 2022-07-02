import React from "react";
import { Link } from "react-router-dom";

const Products = ({ product }) => {
  const { img, productName, price } = product;
  return (
    <div className="container mx-auto px-3">
      <div className="text-center">
        <img src={img} alt="Product_Image" />
        <h2 className="text-2xl font-semibolduppercase uppercase font-semibold">
          {productName}
        </h2>
        <p className="font-semibold text-lg text-orange-500">$ {price}</p>
        <Link to="#" className="btn-secondary mt-5 hover:bg-black inline-block">
          add to cart
        </Link>
      </div>
    </div>
  );
};

export default Products;
