import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
	const { isLoggedIn } = useAuth();

	return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
