import React, { useEffect, useState } from "react";
import PageTitle from "../Common/PageTitle";
import Products from "./Products/Products";

const title = "Shop";

export const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "/fakeData.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });

  return (
    <div>
      <div className="bg-black text-white">
        <PageTitle title={title} />
      </div>
      <div className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {products.map((product) => (
            <Products key={product.productId} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
