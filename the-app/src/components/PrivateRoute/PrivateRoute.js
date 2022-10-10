import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = ({ authed }) => {
    console.log(authed);
    return (

        !authed ? <Outlet /> : <Navigate to="/LogIn" />
    )
}