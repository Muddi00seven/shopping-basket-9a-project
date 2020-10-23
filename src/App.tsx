import React from 'react';
import './App.css';
import { ProductList } from './features/product/ProductList';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import CartItem from "./features/cart/CartItem";
import Navigation from './Components/header/Navigation'

function App() {
  return (
    <div className="">
<Router>
  <Navigation/>
      <Routes>
        <Route path="/"> 
          <ProductList />
        </Route>
          <Route path="/cart">
            <CartItem />
          </Route>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
