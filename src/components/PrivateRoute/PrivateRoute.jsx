import { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
	const isLoggedIn = true;
	const isRefreshing = true;
	const shouldRedirect = !isLoggedIn && !isRefreshing;

	return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
