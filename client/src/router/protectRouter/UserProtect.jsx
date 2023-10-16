import React from "react";;
import { Outlet,Navigate,useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const UserProtect = () => {
    const accessToken = useSelector((state) => state.userReducer.tokens.accessToken)
    const location = useLocation()

    return accessToken ? (
        <Outlet />
    ) : (
        <Navigate to="/" state={{form:location.pathname}} replace={true}/>
    )
}