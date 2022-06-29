import React from "react";
import kidsProduct from "../../../Assets/Images/kids-bike.jpg";
import accessories from "../../../Assets/Images/accessories.jpg";
import { Link } from "react-router-dom";

const ProductCat = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        <div style={backgroundImgOne} className="min-h-screen">
          <div className="p-10">
            <h2 className="text-5xl font-semibold mb-4">Kids Bikes</h2>
            <p className="mb-4">Close-out pricing on dozen of products</p>
            <Link to="/shop" className="btn-primary inline-block">
              Shop Now
            </Link>
          </div>
        </div>
        <div style={backgroundImgTwo} className="min-h-screen">
          <div className="p-10">
            <h2 className="text-5xl font-semibold mb-4">Accessories</h2>
            <p className="mb-4">Close-out pricing on dozen of products</p>
            <Link to="/shop" className="btn-primary inline-block">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCat;

const backgroundImgOne = {
  backgroundImage: `url(${kidsProduct})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const backgroundImgTwo = {
  backgroundImage: `url(${accessories})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
