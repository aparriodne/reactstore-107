import "./navbar.css";

import {Link} from 'react-router-dom'
import { useContext } from "react";
import globalContext from './../state/globalContext';

function Navbar(){

  const numOfProd = useContext(globalContext).getNumberOfProducts;
  




    return (
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to ="/">
          Phoenix
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to ="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to ="/catalog">
                Catatlog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to ="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to ="/admin">
                Admin Page
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
          <Link className="cart btn btn-outline-success position-relative" to="/cart">
              <span id='indi' className="position-absolute top-100 start-0 translate-middle badge square-pill bg-success">{numOfProd()}</span>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              {' '}Cart
          </Link>
          </form>
        </div>
      </div>
    </nav>
    );
}
export default Navbar;