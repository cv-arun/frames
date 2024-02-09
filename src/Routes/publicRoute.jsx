import { Navigate } from "react-router-dom";



const PrivateRoute = ({ component: Component, ...rest }) => {
    let isAuthenticated = localStorage.getItem('isLoggedIn');
    console.log('hello')
    return (!isAuthenticated ? <Component {...rest} /> : <Navigate to="/" />);
};

export default PrivateRoute;