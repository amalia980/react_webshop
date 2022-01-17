import React from "react";
import { useContext, useState, useEffect } from "react";
import { BasketContext } from "../../context/BasketContext";
import { UserContext } from "../../context/UserContext";
import useRemoveArrayDuplicates from "../hooks/useRemoveArrayDuplicaltes";
import { Navigate, useNavigate } from "react-router-dom";

const Checkout = () => {

    const [deliveryInfo, setDeliveryInfo] = useState({
        firstname: "",
        lastname: "",
        street: "",
        zipCode: "",
        city: "",
        phone: "",
        products: []
    });

    const [orderDone, setOrderDone] = useState(false);

    const {basket, setBasket} = useContext(BasketContext);
    const {user} = useContext(UserContext);


    const navigate = useNavigate();

    const filteredBasket = useRemoveArrayDuplicates(basket)

    const handleInput = (e) => {
        setDeliveryInfo({...deliveryInfo, [e.target.name]: e.target.value});
    }

    const makeOrder = (e) => {
        e.preventDefault();
        alert(JSON.stringify(deliveryInfo));
        //reset items in basket when ordered
        setOrderDone(true);
        setBasket([]);
    }

    //populates default address values when logged in
    useEffect(() => {
        setDeliveryInfo({...deliveryInfo, 
            firstname: user.firstname || "",
            lastname: user.lastname || "",
            street: user.street || "",
            zipCode: user.zipCode || "",
            city: user.city || "",
            phone: user.phone || "",
            products: filteredBasket})
    }, [basket])


    return (
        <>
            <h1>Checkout</h1>
            {basket.length === 0 && <p>Nothing to order...</p>}
            {basket.map((item) => (
                <div>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
            ))}
            <button onClick={() => navigate("/")}>Return to Shop</button>

            <h2>Delivery Info</h2>
            <form onSubmit={makeOrder}>
                <input name="firstname" placeholder="Firstname..."
                 onChange={handleInput} value={deliveryInfo.firstname} required/>

                <input name="lastname" placeholder="Lastname..."
                 onChange={handleInput} value={deliveryInfo.lastname} required/>

                <input name="street" placeholder="Street..."
                 onChange={handleInput} value={deliveryInfo.street} required/>

                <input name="zipCode" placeholder="Zipcode..."
                 onChange={handleInput} value={deliveryInfo.zipCode} required/>

                <input name="city" placeholder="City..."
                 onChange={handleInput} value={deliveryInfo.city} required/>

                <input name="phone" placeholder="Phone..."
                 onChange={handleInput} value={deliveryInfo.phone} required/>

                 <button type="submit">Make order</button>
            </form>
        </>
    )
}

export default Checkout;