import React, { useState, useEffect } from "react";

import { getProducts, currency } from "../products";
import { addToCart, useLoggedIn } from "cart/cart";

export default function HomeContent() {
  const loggedIn = useLoggedIn();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="py-10 px-4 flex justify-center flex-wrap gap-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-64 bg-gray-50 shadow-lg flex flex-col items-center p-2 border-2 rounded-md"
        >
          <img src={product.image} alt={product.name} />
          <div className="flex flex-col mt-2 text-center">
            <div className="font-bold">
              <a>{product.name}</a>
            </div>
            <div>{currency.format(product.price)}</div>
          </div>
          {loggedIn && (
            <button
              onClick={() => addToCart(product.id)}
              className="btn primary mt-2"
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
