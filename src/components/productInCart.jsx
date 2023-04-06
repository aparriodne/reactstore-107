import './productInCart.css';

function ProductInCart(props){

    function getTotal(){
        let total = props.data.price * props.data.quantity;
        return total.toFixed(2);
    }
    
    return (
        <div className='prod-cart'>
            <div className='img sqr'>
                <img src={'/images/' + props.data.image} alt='' />
            </div>
            <div className='cnt'>
                <h5>{props.data.title}{' Quantity: '}{props.data.quantity}</h5>
            </div>
            <div>
                <label className='pay'>Price: ${getTotal()}</label>
            </div>
        </div>
    );

}

export default ProductInCart;