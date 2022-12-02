import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getProductById, currency } from "home/products";

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
      <div>
        <p className="mt-5 text-center">{product.description}</p>
        <p className="mt-5 text-justify">{product.longDescription}</p>
      </div>
    </div>
  );
}
