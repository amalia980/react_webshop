import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/view/Layout';
import Shop from './components/view/Shop'
import Account from './components/view/Account'
import Checkout from './components/view/Checkout'
import Login from './components/view/Login'
import Register from './components/view/Register'
import React from "react";
import PrivateRoute from './components/hocs/PrivateRoute';
import UnPrivateRoute from './components/hocs/UnPrivateRoute';



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Shop />} />
            <Route path="account" element={
              <PrivateRoute> 
                <Account/>
              </PrivateRoute>
              }/>
            <Route path="checkout" element={<Checkout/>}/>
            <Route path="login" element={
              <UnPrivateRoute>
                <Login/>
              </UnPrivateRoute>
              }/>
            <Route path="login/:firstname/:lastname" element={
            <UnPrivateRoute>
              <Login/>
                </UnPrivateRoute>
              }/>
            <Route path="register" element={<Register/>} />

          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
