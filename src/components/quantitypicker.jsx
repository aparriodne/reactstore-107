import { useState } from "react";
import "./quantitypicker.css";

function QuantityPicker(props){
    let [quantity, setQuantity] = useState(1);

    function decrease(){
        if (quantity===0) return;
        let val = quantity -1;
        setQuantity(val);
        props.onChange(val);
    }
    
    function increase(){
        let val = quantity +1;
        setQuantity(val);
        props.onChange(val);
    }


    return(
        <div className="qt-picker">
            <button disabled={quantity === 0} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button onClick={increase}>+</button>
        </div>
    );
}
export default QuantityPicker;