import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import './Layout.css'

const Login = () => {

    const [loginUser, setLoginUser] = useState({username: "", lastname: ""})

    const {firstname, lastname} = useParams();

    const {setUser, setLoggedIn} = useContext(UserContext);

    const navigate = useNavigate();

    const handleInput = (e) => {
        setUser({...loginUser, [e.target.name]: e.target.value});
    }

    const handleLoginUser = (e) => {
        e.preventDefault();
        setLoggedIn(true);
        firstname && lastname 
        ? setUser({...loginUser, firstname, lastname}) 
        : setUser({...loginUser, firstname: "Amy", lastname: "Lizar"}); 
        navigate("/account");
    }

    return (
        <div>
            <div>
                <h1>Login</h1>
            </div>
            <form className="form-wrapper" onSubmit={handleLoginUser}>
                <input className="input" name="username" type="text" placeholder="Username..." onChange={handleInput}/>
                <input className="input" name="password" type="text" placeholder="Password..." onChange={handleInput}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;