import React from "react";
import { linksData } from "../../../lib/menuLinks/menu";
import s from "./NavMenuMobile.module.css";
import { NavLink } from "react-router-dom";

const NavMenuMobile = ({ isHomepage, setIsShowMobileMenu }) => {
	return (
		<ul className={s.NavMenuList}>
			{linksData.map(({ to, label }) => (
				<NavLink
					className={s.StyledNavLink}
					key={to}
					to={to}
					data-ishomepage={isHomepage.toString()}
					onClick={() => setIsShowMobileMenu(false)}
				>
					{label}
				</NavLink>
			))}
		</ul>
	);
};

export default NavMenuMobile;
