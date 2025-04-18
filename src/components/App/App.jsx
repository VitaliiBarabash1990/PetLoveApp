import React, { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import SharedLayout from "../SharedLayout/SharedLayout.jsx";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../redux/auth/operations.js";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const News = lazy(() => import("../../pages/News/News"));
const Notices = lazy(() => import("../../pages/Notices/Notices"));
const Friends = lazy(() => import("../../pages/Friends/Friends"));
const Profile = lazy(() => import("../../pages/Profile/Profile"));
const Viewed = lazy(() => import("../../pages/Viewed/Viewed"));
const AddPet = lazy(() => import("../../pages/AddPet/AddPet"));
const Login = lazy(() => import("../../pages/Login/Login"));
const NotFound = lazy(() => import("../../pages/NotFound/NotFound"));
const Register = lazy(() => import("../../pages/Register/Register"));
const Favorites = lazy(() => import("../../pages/Register/Register"));

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	return (
		<>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<HomePage />} />
					<Route path="home" element={<HomePage />} />
					<Route path="news" element={<News />} />
					<Route path="notices" element={<Notices />} />
					<Route path="friends" element={<Friends />} />
					<Route
						path="profile"
						element={
							<PrivateRoute redirectTo="/home" component={<Profile />} />
						}
					>
						<Route index element={<Favorites />} />
						<Route path="favorites" element={<Favorites />} />
						<Route path="viewed" element={<Viewed />} />
					</Route>
					<Route
						path="add-pet"
						element={<PrivateRoute redirectTo="/home" component={<AddPet />} />}
					/>
					<Route
						path="/login"
						element={
							<RestrictedRoute redirectTo="/profile" component={<Login />} />
						}
					/>
					<Route
						path="/register"
						element={
							<RestrictedRoute redirectTo="/profile" component={<Register />} />
						}
					/>
					<Route path="*" element={<NotFound />} />
					<Route />
				</Route>
			</Routes>
		</>
	);
}

export default App;
