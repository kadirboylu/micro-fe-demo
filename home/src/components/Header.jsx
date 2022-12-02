import React from "react";

import Login from "cart/components/Login";
import MiniCart from "cart/components/MiniCart";

export default function Header() {
  return (
    <header className="p-5 bg-gray-700 text-white flex justify-between">
      <div className="flex items-center gap-2">
        <i className="ri-gamepad-line text-3xl"></i>
        <h1 className="font-bold text-2xl">Game Store</h1>
      </div>
      <div className="flex items-center">
        <Login />
        <MiniCart />
      </div>
    </header>
  );
}
