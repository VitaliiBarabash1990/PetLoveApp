import React from "react";
import s from "./GoHomeBtn.module.css";
import { Link } from "react-router-dom";

const GoHomeBtn = () => {
	return (
		<div className={s.LinkBox}>
			<Link to={"/home"} className={s.StyledLink}>
				To home page
			</Link>
		</div>
	);
};

export default GoHomeBtn;
