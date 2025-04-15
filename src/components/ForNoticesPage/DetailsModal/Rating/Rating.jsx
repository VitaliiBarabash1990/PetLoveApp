import React from "react";
import s from "./Rating.module.css";

const Rating = ({ popularity }) => {
	const maxStars = 5;
	const filledStars = Math.ceil((popularity / 37) * maxStars);

	const stars = Array.from({ length: maxStars }, (_, index) => (
		<svg key={index} width={16} height={16}>
			<use
				href={`/sprite.svg#icon-star${index < filledStars ? "" : "Gray"}`}
			></use>
		</svg>
	));

	return (
		<div className={s.RatingContainer}>
			{stars} {popularity}
		</div>
	);
};

export default Rating;
