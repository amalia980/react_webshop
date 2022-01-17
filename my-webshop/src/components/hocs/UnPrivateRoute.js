//if not logged in
import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";

const UnPrivateRoute = ({children}) => {

    const {loggedIn} = useContext(UserContext);

    //console.log(props);

    return !loggedIn ? <>{children}</> : <Navigate to="/" />;
        
    
}

export default UnPrivateRoute;