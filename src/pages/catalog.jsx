import "./catalog.css";
import Product from './../components/product';
import { useEffect, useState} from "react";
import  DataService  from "../dataServices/dataService";

function Catalog() {
    const[catagory, setCatagory] = useState([]);
    const[products, setProducts] = useState([]);
    const[prodsToDisplay, setProdsToDisplay] = useState([]);

    useEffect(function(){
        loadCatalog();
    },[]);

    function loadCatalog(){
        let service = new DataService();
        let product = service.getProducts();
        setProducts(product);
        let cats=["baked","drinks","produce"];
        setCatagory(cats);
        setProdsToDisplay(product);
    }
  
    
    function filter(catagory){
        let list=[];

        for(let i=0; i<products.length; i++ ){
            let prod = products[i];
            if(prod.catagory === catagory){
                list.push(prod);
            }
            setProdsToDisplay(list);
        }
    }

    function clearFilter(){
        setProdsToDisplay(products);
    }

    return(
        <div className="catalog">
            <h1>The Harvest</h1>
            <h5>From the ashes rises {products.length} new products for you</h5>
            <br></br>

            <button onClick={clearFilter} className="btn btn-dark btn-filter">Show All</button>

            {catagory.map(c => <button key={c} onClick={()=>filter(c)} className="btn btn-success btn-filter">{c}</button>)}
            <br></br>
            {prodsToDisplay.map((p) =>(<Product key={p._id} data={p}></Product>))}
        </div>
    );
}
export default Catalog;