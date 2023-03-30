import './cart.css'
import globalContext from '../state/globalContext';
import { useContext } from 'react';

import ProductInCart from '../components/productInCart';

function Cart(){

    const numOfProd = useContext(globalContext).getNumberOfProducts;
    const cart = useContext(globalContext).cart;

    function getTotalPay(){
        let total = 0;
        for(let i = 0; i< cart.length; i++){
            let prod = cart[i];
            total = total + prod.quantity * prod.price;
        }
        return total.toFixed(2)
    }


    return(
        <div className='cart'>
            <h2>{numOfProd()} Items</h2>
            <h1>Ready for Purchase!</h1>
            <div className='parent'>
                <div className='products'>
                    {cart.map((prod) => (
                        <ProductInCart key={prod._id} data={prod}></ProductInCart>
                        ))}
                </div>

                <div className='total'>
                    <h4>Total</h4>

                    <h5>${getTotalPay()}</h5>

                    <button className='btn btn-success'>Pay Now</button>

                </div>
            </div>
        </div>
    );
}

export default Cart;