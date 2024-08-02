import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../utils/context";

export default function PrivateRoute() {
    const { token } = useContext(UserContext)
    return (
        token ? <Outlet /> : <Navigate to='/login' />
    )
}

export function OnlyIfNotIdentified() {
    const { token } = useContext(UserContext)
    return (
        token ? <Navigate to="/" /> : <Outlet />
    )
}