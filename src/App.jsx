// App.jsx
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
// import PublicRoute from './Routes/publicRoute';
// import PrivateRoute from './Routes/privetRoute';
import Home from './pages/home';
import Login from './pages/login';
import Signup from "./pages/signup";

const PublicRoute = ({ Component }) => {
  const isAuthenticated = localStorage.getItem('isLoggedIn')
  return !isAuthenticated ? <Component /> : <Navigate to="/" />
}


const PrivateRoute =  ({ Component }) => {
  const isAuthenticated = localStorage.getItem('isLoggedIn')
  return isAuthenticated ? <Component /> : <Navigate to="/login" />
}

const App = () => {

  // const isAuthenticated = localStorage.getItem('isLoggedIn')

  const router = createBrowserRouter([
    {
      path: "/",
      element:<PrivateRoute Component={Home}  />,
    },
    {
      path: "/login",
      element: <PublicRoute Component={Login} />,
    },
    {
      path: "/signup",
      element: <PublicRoute Component={Signup} />,
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
};

export default App;
