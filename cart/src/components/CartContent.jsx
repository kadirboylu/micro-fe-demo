import React, { useState, useEffect } from "react";

import { login, jwt } from "../cart";

export default function CartContent() {
  const [token, setToken] = useState("");

  return <div>JWT: {token}</div>;
}
