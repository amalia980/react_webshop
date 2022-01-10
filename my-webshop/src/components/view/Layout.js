import { Outlet } from "react-router-dom";
import Navbar from '../general/Navbar';
import Basket from '../general/Basket';
import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import React from "react";
import './Layout.css'

const Layout = () => {

    const {basketOpen} = useContext(BasketContext);

    return (
        <>
            { basketOpen && <Basket/>}
            <Navbar />
            <div className="wrapper">
                <Outlet />
            </div>
        </>
    )
}

export default Layout;