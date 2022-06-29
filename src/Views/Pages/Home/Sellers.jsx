import React from "react";
import Product1 from "../../../Assets/Images/Products/product-1.jpg";
import Product2 from "../../../Assets/Images/Products/product-2.jpg";
import Product3 from "../../../Assets/Images/Products/product-3.jpg";
import Product4 from "../../../Assets/Images/Products/product-4.jpg";
import Product5 from "../../../Assets/Images/Products/product-5.jpg";
import Product6 from "../../../Assets/Images/Products/product-6.jpg";
import Product7 from "../../../Assets/Images/Products/product-7.jpg";
import Product8 from "../../../Assets/Images/Products/product-8.jpg";
import ProductSlider from "../../Components/Common/ProductSlider";

const Sellers = () => {
  const products = [
    Product1,
    Product2,
    Product3,
    Product4,
    Product5,
    Product6,
    Product7,
    Product8,
  ];
  return (
    <div className="container mx-auto px-3">
      <div className="py-10">
        <div className="text-center">
          <h3 className="text-orange-500 text-xl font-semibold tracking-wider">
            Check It Out
          </h3>
          <h2 className="text-5xl font-semibold py-3">Best Sellers</h2>
        </div>
        <div className="mt-8">
          <ProductSlider products={products} />
        </div>
      </div>
    </div>
  );
};

export default Sellers;
