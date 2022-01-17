import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import './Basket.css'
import React from "react";
import useRemoveArrayDuplicates from "../hooks/useRemoveArrayDuplicaltes";


const Basket = () => {

    const {basket, setBasket, setBasketOpen} = useContext(BasketContext);
    const filteredBasket = useRemoveArrayDuplicates(basket);

    const totalPrice = basket.map(p => p.price);

    const removeProd = (id) => {
        setBasket([...basket].filter(product => product.id !== id))
    }

    return (
        <div className="basket">
            {basket.length <= 0 && <p>There are no items</p>}
            {basket.length > 0 && filteredBasket.map(product => (
                <div>
                    <p>{product.name} {product.qty}st - {product.price}</p>
                    
                    <b>Price: {product.price * product.qty}</b>
                    <br></br>
                    <button onClick={() =>removeProd(product.id)}>Remove</button>
                    <hr></hr>
                </div>
            ))}
            <h3>Total Price: {totalPrice.length > 0 ? totalPrice.reduce((total, price) => total + price) : "0"}</h3>
                <button onClick={() => setBasketOpen(false)}>Hide basket</button>
        </div>
    );
};

export default Basket;