import { createEffect, createSignal, Show } from "solid-js";

import { jwt, addToCart } from "cart/cart";

export default ({ id }) => {
  const [loggedIn, setLoggedIn] = createSignal(false);

  createEffect(() => {
    return jwt.subscribe((jwt) => {
      setLoggedIn(!!jwt);
    });
  });

  return (
    <Show when={loggedIn()}>
      <button onClick={() => addToCart(id)} class="btn danger">
        Add to Cart
      </button>
    </Show>
  );
};
