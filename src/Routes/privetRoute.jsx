/* eslint-disable react/prop-types */
// PrivateRoute.jsx

import { Navigate } from "react-router-dom";


const PrivateRoute = ({ component: Component, ...rest }) => {
    let isAuthenticated = localStorage.getItem('isLoggedIn');
    return (isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />);
};

export default PrivateRoute;
