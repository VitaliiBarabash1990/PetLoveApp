import React from "react";
import { Link } from "react-router-dom";
import s from "./Logo.module.css";

const Logo = ({ isHomepage }) => {
	return (
		<div className={s.LogoContainer}>
			<Link to={"/home"}>
				<svg>
					<use
						href={
							isHomepage
								? "/sprite.svg#icon-logo-white"
								: "/sprite.svg#icon-logo-header"
						}
					></use>
				</svg>
			</Link>
		</div>
	);
};

export default Logo;
