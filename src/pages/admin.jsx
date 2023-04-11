import './admin.css';
import {useState} from 'react'
import DataService from '../dataServices/dataService';

function Admin(){
    const [product, setProduct] = useState({});
    const [coupon, setCoupon] = useState({});

function handleTextChange(e){
    const value = e.target.value;
    const name = e.target.name;


    let copy = {...product};
    copy[name] = value;
    setProduct(copy);
}

function handleCouponTextChange(e){
    const value = e.target.value;
    const name = e.target.name;

    let copy = {...coupon};
    copy[name] = value;
    setCoupon(copy);

}

function saveProduct(){
    console.log(product);
    // parse price to a number before saving
    let copy = {...product};
    copy.price = parseFloat(copy.price)

    let service = new DataService();
    service.saveProducts(copy)

    setProduct({
        title: '',
        image: '',
        catagory: '',
        price: ''
    });
}

function saveCoupon(){
    console.log(coupon);
}


  return <div className="admin">
        <main className='ad-main'>
            <section id='prod'>
                <h5>Product</h5>

                <form>

                    <div className="mb-3">
                        <label  className='form-label'>Title</label>
                        <input name='title' value={product.title} onChange={handleTextChange} type='text' className='form-control'/>
                    </div>
                    <div className="mb-3">
                        <label  className='form-label'>category</label>
                        <input name='catagory' value={product.catagory} onChange={handleTextChange} type='text' className='form-control'/>
                    </div>
                    <div className="mb-3">
                        <label  className='form-label'>Image</label>
                        <input name='image' value={product.image} onChange={handleTextChange} type='text' className='form-control'/>
                    </div>
                    <div className="mb-3">
                        <label  className='form-label'>Price</label>
                        <input name='price' value={product.price} onChange={handleTextChange} type='text' className='form-control'/>
                    </div>
                    <div>
                    <button type='button' onClick={saveProduct} >Save Product</button>
                    </div>
                </form>
            </section>

            <section id='coup'>
                <h5>Coupon Code</h5>
                
                <form>
                    <div className="mb-3">
                        <label  className='form-label'>Code</label>
                        <input name='code' onChange={handleCouponTextChange} type='text' className='form-control'/>
                    </div>
                    <div className="mb-3">
                        <label  className='form-label'>Discount</label>
                        <input name='discount' onChange={handleCouponTextChange} type='text' className='form-control'/>
                    </div>
                    <div>
                    <button type='button' onClick={saveCoupon} >Save Coupon</button>
                    </div>
                </form>
            </section>

        </main>
    </div>
}
export default Admin

// Product
// -title
// -price
// -category
// -image
// 