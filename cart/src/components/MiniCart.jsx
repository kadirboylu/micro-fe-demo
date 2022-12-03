import React, { useEffect, useState } from "react";

import { cart, clearCart } from "../cart";
import { currency } from "home/products";

export default function MiniCart() {
  const [items, setItems] = useState(undefined);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setItems(cart.value?.cartItems);
    return cart.subscribe((c) => {
      setItems(c?.cartItems);
    });
  }, []);

  if (!items) return null;

  if (!items?.length) {
    return (
      <div className="select-none">
        <span
          onClick={() => setShowCart(!showCart)}
          id="showcart_span"
          className="cursor-pointer"
        >
          <i className="ri-shopping-cart-2-fill text-2xl" id="showcart"></i>
          {items.reduce((sum, item) => sum + item.quantity, 0)}
        </span>
        {showCart && (
          <div
            className="absolute p-5 border-2 border-gray-700 bg-white rounded-md text-black"
            style={{
              width: 300,
              top: "4rem",
              right: 20,
            }}
          >
            <div className="text-center">Your cart is empty</div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="select-none">
      <span
        onClick={() => setShowCart(!showCart)}
        id="showcart_span"
        className="cursor-pointer"
      >
        <i className="ri-shopping-cart-2-fill text-2xl" id="showcart"></i>
        {items.reduce((sum, item) => sum + item.quantity, 0)}
      </span>
      {showCart && (
        <>
          <div
            className="absolute p-5 border-2 border-gray-700 bg-white rounded-md text-black"
            style={{
              width: 300,
              top: "4rem",
              right: 20,
            }}
          >
            <div
              className="grid gap-3 text-sm"
              style={{
                gridTemplateColumns: "1fr 3fr 10fr 2fr",
              }}
            >
              {items.map((item) => (
                <React.Fragment key={item.id}>
                  <div>{item.quantity}</div>
                  <img src={item.image} alt={item.name} className="max-h-6" />
                  <div>{item.name}</div>
                  <div className="text-right">
                    {currency.format(item.quantity * item.price)}
                  </div>
                </React.Fragment>
              ))}
              <div></div>
              <div></div>
              <div></div>
              <div className="font-bold">
                {currency.format(
                  items.reduce((a, v) => a + v.quantity * v.price, 0)
                )}
              </div>
            </div>
            <div className="flex mt-4">
              <div className="flex-grow">
                <button
                  id="clearcart"
                  className="btn danger"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
              <div className="flex-end">
                <button className="btn success" onClick={clearCart}>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
