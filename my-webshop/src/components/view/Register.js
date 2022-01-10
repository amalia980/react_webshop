import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import './Layout.css';


const Register = () => {

    const navigate = useNavigate();

    const [registerUser, setRegisterUser] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: ""
    })

    const handleInput  = (e) => {
        setRegisterUser({...registerUser, [e.target.name]: e.target.value});
    }

    console.log(registerUser);

    const handleRegisterUser = (e) => {
        e.preventDefault();
        alert(JSON.stringify(registerUser));
        navigate(`/login/${registerUser.firstname}/${registerUser.lastname}`);
    }

    return (
        <>
        <div>
            <div>
                <h1>Register</h1>
            </div>
            <form className="form-wrapper" onSubmit={handleRegisterUser}>
                <input className="input" type="text" name="firstname" placeholder="Firstname..." onChange={handleInput} />
                <input className="input" type="text" name="lastname" placeholder="Lastname..." onChange={handleInput}/>
                <input className="input" type="text" name="username" placeholder="Username..." onChange={handleInput}/>
                <input className="input" type="text" name="password" placeholder="Password..." onChange={handleInput}/>
                <button type="submit" >Register</button>
            </form>
        </div>
        </>
    )
}

export default Register;