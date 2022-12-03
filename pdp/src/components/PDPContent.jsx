import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import { getProductById, currency } from "home/products";
import placeAddToCart from "addtocart/placeAddToCart";

export default function PDPContent() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      getProductById(id).then(setProduct);
    } else {
      setProduct(null);
    }
  }, [id]);

  const addToCart = useRef(null);

  useEffect(() => {
    if (addToCart.current) {
      placeAddToCart(addToCart.current, product.id);
    }
  }, [product]);

  if (!product)
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );

  return (
    <div className="text-xl md:mx-5 p-4 flex flex-col items-center">
      <img src={product.image} alt={product.name} />
      <div className="flex mt-2 flex-col items-center md:flex-row">
        <h1 className="text-2xl text-center font-bold">{product.name}</h1>
        <p className="md:ml-2 font-normal">{currency.format(product.price)}</p>
      </div>
      <div className="mt-2" ref={addToCart}></div>
      <div>
        <p className="mt-2 text-center">{product.description}</p>
        <p className="mt-2 text-justify">{product.longDescription}</p>
      </div>
    </div>
  );
}
