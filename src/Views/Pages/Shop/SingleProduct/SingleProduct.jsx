import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { productId } = useParams();
  const [getProduct, setGetProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const quantityCount = (e) => {
    console.log(e);
    const quantityValue = e.target.value;
    setQuantity(quantityValue);
  };

  if (quantity < 0) {
    setQuantity(0);
  }

  useEffect(() => {
    const url = "/fakeData.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setGetProduct(data.find((item) => item.productId == productId))
      );
  });
  const { img, productName, productDetails, price, description, rating } =
    getProduct;
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
            <p>{rating}</p>
            <p className="py-3 text-lg">{productDetails}</p>
            <p className="text-3xl mb-3 text-orange-500 font-medium">
              $ {price}
            </p>
            <div className="mt-4">
              <label htmlFor="quantity" className="mb-1 block">
                Quantity
              </label>
              <input
                className="p-2 w-20 border-2 text-xl outline-none rounded"
                type="number"
                name=""
                min={1}
                max={100}
                id="quantity"
                onChange={(e) => quantityCount(e)}
              />
            </div>
            <div className="mt-2">
              <h4 className="text-2xl font-bold text-orange-500">
                Total Quantity Price
              </h4>
              <p className="font-bold text-orange-500 text-2xl">
                $ {price * quantity}
              </p>
            </div>
            <button className="btn-secondary mt-5">add to cart</button>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-3xl font-semibold text-center mb-2 text-orange-500">
            Description
          </h3>
          <p className="leading-10">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
