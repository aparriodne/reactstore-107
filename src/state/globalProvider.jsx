import { Provider } from "react";
import GlobalContext from "./globalContext";
import { useState } from "react";

function GlobalProvider(props) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ name: "Aaron", id: 343344 });

  function addToCart(prod) {
    console.log("global cart");

    let copy = [...cart];
    copy.push(prod);
    setCart(copy);

    console.log(copy);
  }

  function removeFromCart() {
    console.log("global cart remove");
  }

  function getNumberOfProd() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      total = total + prod.quantity;
      // or total += prod.quantity;
    }

    return total;
  }

  return (
    <GlobalContext.Provider
      value={{
        cart: cart,
        user: user,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        getNumberOfProducts: getNumberOfProd,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
