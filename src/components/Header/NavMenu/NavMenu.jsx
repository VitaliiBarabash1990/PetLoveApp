import React from "react";
import { NavLink } from "react-router-dom";
import { linksData } from "../../../lib/menuLinks/menu";
import s from "./NavMenu.module.css";
import clsx from "clsx";

const NavMenu = ({ isHomepage }) => {
	return (
		<ul className={s.NavMenuList}>
			{linksData.map(({ to, label }) => (
				<NavLink
					key={to}
					to={to}
					className={({ isActive }) =>
						clsx(
							s.StyledNavLink,
							isHomepage ? s.Homepage : s.NotHomepage,
							isActive && (isHomepage ? s.ActiveHomepage : s.ActiveNotHomepage)
						)
					}
				>
					{label}
				</NavLink>
			))}
		</ul>
	);
};

export default NavMenu;
