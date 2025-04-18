import React from "react";
import s from "./MyPetsTitle.module.css";
import { Link } from "react-router-dom";

const MyPetsTitle = () => {
	return (
		<div className={s.TitlePetsContainer}>
			<h2>My pets</h2>
			<Link to={"/add-pet"} className={s.AddPetLink}>
				Add pet{" "}
				<svg width={18} height={18}>
					<use href="/sprite.svg#icon-plus"></use>
				</svg>
			</Link>
		</div>
	);
};

export default MyPetsTitle;
