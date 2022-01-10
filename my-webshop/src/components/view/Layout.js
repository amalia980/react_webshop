import { Outlet } from "react-router-dom";
import Navbar from '../general/Navbar';
import Basket from '../general/Basket';
import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import React from "react";

const Layout = () => {

    const {basketOpen} = useContext(BasketContext);

    return (
        <div>
            { basketOpen && <Basket/>}
            <Navbar />
            <Outlet />
            </div>
    )
}

export default Layout;