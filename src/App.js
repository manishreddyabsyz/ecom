import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Product";

import Cart from "./components/Cart/Cart";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Posts from "./components/Posts/Posts";
import "bootstrap/dist/css/bootstrap.min.css";
import PRODUCTS from "./components/Data/data";
import SignUp from "./components/SignUp/SignUp";
import Notfound from "./components/NotFound/Notfound";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

export const GlobalInfo = createContext();
function App() {
  const [cartList, setCartList] = useState([]);

  const cartItems = (id) => {
    const updatedProducts = PRODUCTS.find((item) => item.id === id);

    setCartList([...cartList, updatedProducts]);
  };

  console.log(cartList, "cartlist");
  return (
    <GlobalInfo.Provider value={{ cartList, setCartList }}>
      <div className="App">
        <Routes>
          <Route element={<ProtectedRoute />}>
         
          <Route eaxct path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<SingleProduct getItems={cartItems} /> } />
          <Route path="/posts" element={<Posts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Notfound />}/>
          </Route>
          <Route path="/login" element={<SignUp />} />
        </Routes>
      </div>
    </GlobalInfo.Provider>
  );
}

export default App;
