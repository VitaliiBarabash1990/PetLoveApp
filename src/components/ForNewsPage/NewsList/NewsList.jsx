import React from "react";
import { useNews } from "../../../hooks/useNews";
import NewsItem from "../NewsItem/NewsItem";
import PaginationGeneral from "../../Pagination/Pagination";
import s from "./NewsList.module.css";

const NewsList = ({ setCurrentPage, currentPage }) => {
	const { news, totalPages } = useNews();

	return (
		<>
			{news?.length === 0 && (
				<p className={s.Text}>
					Sorry, <b>no find</b> any news with these search parameter
				</p>
			)}
			<ul className={s.List}>
				{news.map((item) => (
					<NewsItem key={item._id} item={item} />
				))}
			</ul>
			<PaginationGeneral
				totalPages={totalPages}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
			/>
		</>
	);
};

export default NewsList;
