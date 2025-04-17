import React from "react";
import { Link } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = ({ setIsShowMobileMenu }) => {
	const handleClick = () => {
		if (setIsShowMobileMenu) {
			setIsShowMobileMenu(false);
		}
	};

	return (
		<div className={s.ButtonsAuthContainer}>
			<Link to={"/login"} className={s.LoginBtn} onClick={handleClick}>
				log in
			</Link>
			<Link to={"/register"} className={s.RegisterBtn} onClick={handleClick}>
				registration
			</Link>
		</div>
	);
};

export default AuthNav;
