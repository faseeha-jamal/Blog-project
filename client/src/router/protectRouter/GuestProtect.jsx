import React from "react";
import { Outlet,useLocation,Navigate } from "react-router-dom";
import { useSelector } from "react-redux"


export const GuestProtect = () => {
    const accessToken = useSelector((state)=> state.userReducer.tokens.accessToken)
    const location = useLocation()

    return !accessToken || accessToken == null ? (
        <Outlet />
    ) : (
        <Navigate to="/user/home" state={{ from: location.pathname }} replace={true} />
    )
}
