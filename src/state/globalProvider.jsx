import { Provider } from "react";
import GlobalContext from "./globalContext";
import { useState } from "react";

function GlobalProvider(props){
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({name: 'Aaron', id:343344});

    function addToCart(prod){
        console.log('global cart');

        let copy = [...cart];
        copy.push(prod);
        setCart(copy);

        console.log(copy);
    }

    function removeFromCart(){
        console.log('global cart remove');
    }

    return<GlobalContext.Provider value={{
        cart: cart,
        user: user,
        addToCart: addToCart,
        removeFromCart: removeFromCart
    }}>{props.children}</GlobalContext.Provider>;


}

export default GlobalProvider;