import "./product.css";
import QuantityPicker from "./quantitypicker";
import { useEffect,useState,useContext } from "react";
import globalContext from "../state/globalContext";

function Product(props){

    const [quantity,setQuantity] = useState(1);
    const addToCart = useContext(globalContext).addToCart;

    useEffect(function(){
        console.log("diffrent product!")
    },[]);

    function onQuantityChanged(qty){
        setQuantity(qty);
    }

    function getTotal(){

        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    function handleAddClick(){
            console.log('adding to cart')
            
            let prodForCart = {...props.data};
            prodForCart.quantity = quantity;
            console.log(prodForCart);

            addToCart(prodForCart);


    }




    return(
        <div className="product">
            <h5>{props.data.title}</h5>
            <img src={"/images/"+ props.data.image} alt="" />

            <div className="prices">
                <label>Price ${props.data.price.toFixed(2)}</label>
                <label>Total ${getTotal()}</label>
            </div>
            <div className='control'>
            <QuantityPicker onChange={onQuantityChanged}></QuantityPicker>
            <button onClick={handleAddClick} id='addbtn' className="btn btn-primary">Add</button>
            </div>
        </div>
    );
}
export default Product;