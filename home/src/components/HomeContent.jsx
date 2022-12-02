import React, { useState, useEffect } from "react";

import { getProducts, currency } from "../products";

export default function HomeContent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="py-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col items-center p-2 border-2 rounded-md"
        >
          <img src={product.image} alt={product.name} />
          <div className="flex mt-2">
            <div className="flex-grow font-bold">
              <a>{product.name}</a>
            </div>
            <div className="flex-end ml-2">
              {currency.format(product.price)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
