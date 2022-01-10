import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import './Basket.css'
import React from "react";


const Basket = () => {

    const {basket} = useContext(BasketContext);

    return (
        <div className="basket">
            {basket.length <= 0 && <p>There are no items</p>}
        </div>
    );
};

export default Basket;