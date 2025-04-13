// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import UserProfileBtn from "../UserProfileBtn/UserProfileBtn";
import { useAuth } from "../../hooks/useAuth";
import Logo from "./Logo/Logo";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import LogoutHeader from "./LogoutHeader/LogoutHeader";
import NavMenu from "./NavMenu/NavMenu";
import AuthNav from "../AuthNav/AuthNav";
import s from "./Header.module.css";

const Header = () => {
	const tablet = useMediaQuery({ minWidth: 768 });
	const tabletEnd = useMediaQuery({ maxWidth: 1279.98 });
	const desktop = useMediaQuery({ minWidth: 1280 });
	const location = useLocation();
	const [isHomepage, setIsHomepage] = useState(false);
	const { isLoggedIn } = useAuth();

	useEffect(() => {
		if (location.pathname === "/home" || location.pathname === "/") {
			setIsHomepage(true);
		} else {
			setIsHomepage(false);
		}
	}, [location.pathname]);

	return (
		<header className={s.MainHeader}>
			<div
				className={s.HeaderContainer}
				data-ishomepage={isHomepage.toString()}
			>
				<Logo isHomepage={isHomepage} />
				{desktop && <NavMenu isHomepage={isHomepage} />}
				<div className={s.BlockBtns}>
					{((!isLoggedIn && !isHomepage && tablet && tabletEnd) ||
						(!isLoggedIn && desktop)) && <AuthNav />}
					{isLoggedIn && !isHomepage && tablet && <LogoutHeader />}
					{isLoggedIn && <UserProfileBtn isHomepage={isHomepage} />}
					<BurgerBtn isHomepage={isHomepage} />
				</div>
			</div>
		</header>
	);
};

export default Header;
