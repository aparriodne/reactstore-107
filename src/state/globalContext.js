import { createContext } from "react";

const globalContext = createContext({


    cart: [],
    user: {},

    addToCart: () => {},
    removeFromCart: () => {}
});

export default globalContext;