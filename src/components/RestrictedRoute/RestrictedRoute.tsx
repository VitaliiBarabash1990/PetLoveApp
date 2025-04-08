import { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface RestrictedRouteProps {
	component: ReactElement;
	redirectTo?: string;
}

const RestrictedRoute: FC<RestrictedRouteProps> = ({
	component: Component,
	redirectTo = "/",
}) => {
	const isLoggedIn = true;

	return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
