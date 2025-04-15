import React from "react";
import { formatDate } from "../../../functions/formatDate";
import s from "./NewsItem.module.css";

const NewsItem = ({ item }) => {
	const { imgUrl, text, title, date, url } = item;
	const formattedDate = formatDate(date);

	return (
		<li className={s.ItemContainer}>
			<img src={imgUrl} alt={title} />
			<h2>{title}</h2>
			<p>{text}</p>
			<div className={s.DateReadBox}>
				<span>{formattedDate}</span>
				<a href={url} target="_blank" rel="noreferrer">
					Read more
				</a>
			</div>
		</li>
	);
};

export default NewsItem;
