import { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
	component: ReactElement;
	redirectTo?: string;
}

const PrivateRoute: FC<PrivateRouteProps> = ({
	component: Component,
	redirectTo = "/",
}) => {
	const isLoggedIn = true;
	const isRefreshing = true;
	const shouldRedirect = !isLoggedIn && !isRefreshing;

	return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
