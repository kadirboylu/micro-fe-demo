# Micro FE E-Commerce Demo App

I made this demo app to learn how to use micro frontends in a real world application. It is a simple e-commerce app that allows you to add products to a cart and checkout. It is built using React, SolidJS, and NestJS. The app is split into 5 parts: `home`, `cart`, `pdp`, `addtocart` and `server`. The `home`, `cart` and `pdp` are built using React. The `addtocart` is built using SolidJS. The `server` is built using NestJS.

## TODO

This is a hobby project. I am not actively working on it. I will continue to work on it when I have time. Here are some things that I would like to do:

- [ ] Add sign-up functionality to the `server`
- [ ] Create increase and decrease quantity buttons for the cart
- [ ] Use a custom hook for outside click detection
- [ ] Add more products

## Installation

This project has five parts: `home`, `cart`, `pdp`, `addtocart` and `server`. Each part has its own `package.json` file. Open a terminal for each part and run the following commands:

```bash
pnpm i
pnpm start
```

After running the above commands, you should be able to access the app at `http://localhost:3000`. Project has 2 users: `kadirboylu` and `johndoe` with the same password (`123`) for both. Anytime you restart the `server`, the cart will be reset and users cart will be initialized with default values.
