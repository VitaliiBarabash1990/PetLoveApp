import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SharedLayout from "../SharedLayout/SharedLayout.jsx";
import HomePage from "../../pages/HomePage/HomePage";
import News from "../../pages/News/News";
import Notices from "../../pages/Notices/Notices";
import Friends from "../../pages/Friends/Friends";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Profile from "../../pages/Profile/Profile";
import Viewed from "../../pages/Viewed/Viewed";
import AddPet from "../../pages/AddPet/AddPet";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import Login from "../../pages/Login/Login";
import NotFound from "../../pages/NotFound/NotFound";
import Register from "../../pages/Register/Register";
import Favorites from "../ForProfilePage/Favorites/Favorites.jsx";

function App() {
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
