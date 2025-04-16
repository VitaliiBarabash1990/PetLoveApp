import React from "react";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
	const isLoggedIn = true;

	return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
