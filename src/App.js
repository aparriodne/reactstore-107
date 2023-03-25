import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Catalog from './pages/catalog';
import Home from "./pages/home";
import About from './pages/about';
import Cart from './pages/cart';
import 'font-awesome/css/font-awesome.min.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/catalog' element={<Catalog></Catalog>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
        </Routes>
      
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
