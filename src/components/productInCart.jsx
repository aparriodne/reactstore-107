import './productInCart.css';

function ProductInCart(props){

    function getTotal(){
        let total = props.data.price * props.data.quantity;
        return total.toFixed(2);
    }
    
    return (
        <div className='prod-cart'>
            <img src={'/images/' + props.data.image} alt='' />
            <h5>{props.data.quantity}{' Order/ '}{props.data.title}</h5>
            <div>
                <label>${props.data.price.toFixed(2)}</label>
                <label>${getTotal()}</label>
            </div>
        </div>
    );

}

export default ProductInCart;