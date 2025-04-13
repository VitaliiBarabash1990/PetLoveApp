import React, { Suspense, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Outlet, useLocation } from "react-router-dom";
import { fetchSpecies } from "../../redux/notices/operations";
import Header from "../Header/Header";
import MainScreen from "../MainScreen/MainScreen";
import LoaderMain from "../Common/LoaderMain/LoaderMain.jsx";

const PageLayout = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const [showFirstScreen, setShowFirstScreen] = useState(
		location?.pathname === "/" ? true : false
	);

	useEffect(() => {
		setTimeout(() => setShowFirstScreen(false), 6000);
		dispatch(fetchSpecies());
	}, [dispatch]);

	return (
		<>
			<Header />
			{showFirstScreen && <MainScreen />}
			<main>
				<Suspense
					fallback={
						<div className={s.LoaderContainer}>
							<LoaderMain />
						</div>
					}
				>
					<Outlet />
				</Suspense>
			</main>
			<ToastContainer />
		</>
	);
};

export default PageLayout;
