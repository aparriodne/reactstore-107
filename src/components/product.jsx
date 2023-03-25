import "./product.css";
import QuantityPicker from "./quantitypicker";
import { useEffect,useState } from "react";

function Product(props){

    const [quantity,setQuantity] = useState(1);

    useEffect(function(){
        console.log("hey!")
    },[]);

    function onQuantityChanged(qty){
        setQuantity(qty);
    }

    function getTotal(){

        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    return(
        <div className="product">
            <h5>{props.data.title}</h5>
            <img src={"/images/"+ props.data.image} alt="" />
{/*  */}
            <div className="prices">
                <label>Price ${props.data.price.toFixed(2)}</label>
                <label>Total ${getTotal()}</label>
            </div>
            <div className='control'>
            <QuantityPicker onChange={onQuantityChanged}></QuantityPicker>
            <button className="btn btn-primary">Add</button>
            </div>
        </div>
    );
}
export default Product;