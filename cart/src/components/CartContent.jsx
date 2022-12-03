import React, { useState, useEffect } from "react";

import { cart, clearCart, useLoggedIn } from "cart/cart";
import { currency } from "home/products";

export default function CartContent() {
  const loggedIn = useLoggedIn();
  const [items, setItems] = useState([]);

  useEffect(
    () => cart.subscribe((value) => setItems(value?.cartItems ?? [])),
    []
  );

  if (!loggedIn) {
    return (
      <div>
        <h2 className="text-center font-bold text-lg pt-5">
          Please login to view cart
        </h2>
      </div>
    );
  }

  if (!items?.length) {
    return (
      <div>
        <h2 className="text-center font-bold text-lg pt-5">
          Your cart is empty
        </h2>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-center font-bold text-2xl pt-5">SHOPPING CART</h2>
      <div className="grid grid-cols-4 gap-2 p-5">
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <div>{item.quantity}</div>
            <img src={item.image} alt={item.name} className="md:h-32 h-16" />
            <div>{item.name}</div>
            <div className="text-right">
              {currency.format(item.quantity * item.price)}
            </div>
          </React.Fragment>
        ))}
        <div></div>
        <div></div>
        <div></div>
        <div className="text-right font-bold mt-2" id="grand_total">
          {currency.format(items.reduce((a, v) => a + v.quantity * v.price, 0))}
        </div>
      </div>
      <div className="flex justify-end gap-2 mr-4">
        <div>
          <button id="clearcart" className="btn danger" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
        <div>
          <button className="btn success" onClick={clearCart}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
