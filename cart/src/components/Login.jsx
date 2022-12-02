import React, { useState } from "react";

import { login, useLoggedIn } from "../cart";

export default function Login() {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);

  const [username, setUsername] = useState("kadirboylu");
  const [password, setPassword] = useState("123");

  if (loggedIn) return null;

  return (
    <div className="select-none">
      <span onClick={() => setShowLogin(!showLogin)}>
        <i className="ri-fingerprint-line text-2xl" id="showlogin"></i>
      </span>
      {showLogin && (
        <div
          className="absolute p-5 border-2 border-gray-700 bg-white rounded-md text-black"
          style={{
            width: 300,
            top: "4rem",
            right: 20,
          }}
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full mb-3"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full"
          />
          <button
            className="bg-green-600 border border-green-700 text-white py-2 px-5 rounded-md text-sm mt-5"
            onClick={() => login(username, password)}
            id="loginbtn"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}
