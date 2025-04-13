import React from "react";
import { linksData } from "../../../lib/menuLinks/menu";
import s from "./NavMenu.module.css";
import { NavLink } from "react-router-dom";

const NavMenu = ({ isHomepage }) => {
	return (
		<ul className={s.NavMenuList}>
			{linksData.map(({ to, label }) => (
				<NavLink
					key={to}
					to={to}
					className={s.StyledNavLink}
					data-ishomepage={isHomepage.toString()}
				>
					{label}
				</NavLink>
			))}
		</ul>
	);
};

export default NavMenu;
