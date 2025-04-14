import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import s from "./LinksCollections.module.css";

const LinksCollections = () => {
	const location = useLocation();

	return (
		<div className={s.NavContainer}>
			<NavLink
				className={s.StyledLinkTo}
				to={"favorites"}
				style={
					location.pathname === "/profile"
						? {
								backgroundColor: "var(--accent-color)",
								color: "var(--white-color)",
						  }
						: {}
				}
			>
				My favorite pets
			</NavLink>
			<NavLink to={"viewed"} className={s.StyledLinkTo}>
				Viewed
			</NavLink>
		</div>
	);
};

export default LinksCollections;
