import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { productId } = useParams();
  const [getProduct, setGetProduct] = useState({});
  useEffect(() => {
    const url = "/fakeData.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setGetProduct(data.find((item) => item.productId == productId))
      );
  });
  const { img, productName, productDetails, price } = getProduct;
  return (
    <div>
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 py-5 gap-4">
          <div>
            <img src={img} alt="Product Name" />
          </div>
          <div>
            <h2 className="text-orange-500 font-semibold text-3xl uppercase mb-2">
              {productName}
            </h2>
            <p className="py-3 text-lg">{productDetails}</p>
            <p className="text-lg mb-3 text-orange-500 font-medium">
              $ {price}
            </p>
            <p>Quantity</p>
            <button className="btn-secondary mt-5">add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
