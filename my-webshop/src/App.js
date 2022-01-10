import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/view/Layout';
import Shop from './components/view/Shop'
import Account from './components/view/Account'
import Checkout from './components/view/Checkout'
import Login from './components/view/Login'
import Register from './components/view/Register'
import React from "react";



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Shop />} />
            <Route path="account" element={<Account/>} />
            <Route path="checkout" element={<Checkout/>}/>
            <Route path="login" element={<Login/>} />
            <Route path="login/:firstname/:lastname" element={<Login/>} />
            <Route path="register" element={<Register/>} />

          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
