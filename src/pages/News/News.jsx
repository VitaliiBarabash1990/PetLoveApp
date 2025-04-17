import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchNews } from "../../redux/news/operations";
import { useNews } from "../../hooks/useNews";
import LoaderMain from "../../components/Common/LoaderMain/LoaderMain";
import SearchBar from "../../components/ForNewsPage/SearchBar/SearchBar";
import NewsList from "../../components/ForNewsPage/NewsList/NewsList";
import s from "./News.module.css";

const News = () => {
	const { isLoadingNews } = useNews();
	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(1);
	const [searchValue, setSearchValue] = useState("");

	useEffect(() => {
		if (!searchValue || searchValue === "") {
			dispatch(fetchNews({ page: currentPage, searchQuery: null }));
		} else {
			dispatch(fetchNews({ page: currentPage, searchQuery: searchValue }));
		}
	}, [currentPage, dispatch, searchValue]);

	return (
		<section className={s.HomePageSection}>
			<div className={s.BoxTitle}>
				<h1 className={s.TitleOfPage}>News</h1>
				<SearchBar
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					setCurrentPage={setCurrentPage}
				/>
			</div>
			{isLoadingNews ? (
				<div className={s.LoaderNewsBox}>
					<LoaderMain />
				</div>
			) : (
				<NewsList setCurrentPage={setCurrentPage} currentPage={currentPage} />
			)}
		</section>
	);
};

export default News;
