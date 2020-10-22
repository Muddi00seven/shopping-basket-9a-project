import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProductList } from './features/product/ProductList';
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import CartItem from "./features/cart/CartItem";
import Navigation from './Components/header/Navigation'

function App() {
  return (
    <div className="">
      {/* <Nav /> */}
<Router>
  <Navigation/>
      <Routes>
        {/* <Switch> */}
        <Route path="/"> 
          <ProductList />
          {/* <Footer /> */}
        </Route>
          <Route path="/cart">
            <CartItem />
          </Route>
        {/* </Switch> */}
        </Routes>
        </Router>
    </div>
  );
}

export default App;
