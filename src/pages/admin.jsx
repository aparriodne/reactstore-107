import './admin.css';
import {useState} from 'react'

function Admin(){
    const [product, setProduct] = useState({});

function handleTextChange(e){
    const value = e.target.value;
    const name = e.target.name;

    let copy = {...product};
    copy[name] = value;
    setProduct(copy);
}
function saveProduct(){
    console.log(product);
}

  return <div className="admin">
        <main>
            <section id='prod'>
                <h5>Product</h5>

                <form>

                    <div className="mb-3">
                        <label  className='form-label'>Title</label>
                        <input name='title' onChange={handleTextChange} type='text' className='form-control'/>
                    </div>
                    <div className="mb-3">
                        <label  className='form-label'>category</label>
                        <input name='category' onChange={handleTextChange} type='text' className='form-control'/>
                    </div>
                    <div className="mb-3">
                        <label  className='form-label'>Image</label>
                        <input name='image' onChange={handleTextChange} type='text' className='form-control'/>
                    </div>
                    <div className="mb-3">
                        <label  className='form-label'>Price</label>
                        <input name='price' onChange={handleTextChange} type='text' className='form-control'/>
                    </div>
                    <div>
                    <button type='button' onClick={saveProduct} >Save Product</button>
                    </div>
                </form>
            </section>

            <section id='coup'>
                <h5>Coupon Code</h5>
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