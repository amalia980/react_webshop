import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { BasketContext } from "../../context/BasketContext";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'
import React from "react";


const Navbar = () => {

    const {loggedIn, setLoggedIn, setUser} = useContext(UserContext);
    const {basketOpen, setBasketOpen} = useContext(BasketContext);

    const navigate = useNavigate();

    const handleBasketOpen = () => {
        return basketOpen ? <button onClick={() => setBasketOpen(false)}>Hide Basket</button> : <button onClick={() => setBasketOpen(true)}>Show Basket</button>
    }

    const handleLogout = () => {
        setLoggedIn(false);
        setUser({username: ""});
        navigate("/login");
    }

    const authNav = () => {
        return (
            <nav className="nav">
                <div>
                    <Link to="/">Shop</Link>
                    <Link to="/account">Account</Link>
                    <Link to="/checkout">Checkout</Link>
                </div>

                <div className="nav">
                    { handleBasketOpen()}
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </nav>
        )
    }

    const unAuthNav = () => {
        return (
            <nav className="nav">
                <div>
                    <Link to="/">Shop</Link>
                    <Link to="/checkout">Checkout</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
                <div>
                    {handleBasketOpen()}
                </div>
            </nav>
        )
    }

    return (
        <>
        {loggedIn ? authNav() : unAuthNav()}
        </>
    )
}

export default Navbar;