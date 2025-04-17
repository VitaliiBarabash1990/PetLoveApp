import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SearchBarNotices from "../../components/ForNoticesPage/SearchBarNotices/SearchBarNotices";
import {
	fetchCategories,
	fetchGenders,
	fetchCities,
} from "../../redux/notices/operations";
import AnimalsList from "../../components/ForNoticesPage/AnimalsList/AnimalsList";
import LoaderMain from "../../components/Common/LoaderMain/LoaderMain";
import PaginationGeneral from "../../components/Pagination/Pagination";
import { useNotices } from "../../hooks/useNotices";
import s from "./Notices.module.css";

const Notices = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const { totalPagesNotices, isLoadNotices } = useNotices();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCategories());
		dispatch(fetchGenders());
		dispatch(fetchCities());
	}, []);

	return (
		<section className={s.HomePageSection}>
			<h1 className={s.TitleOfPage}>Find your favorite pet</h1>
			<SearchBarNotices
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
			{isLoadNotices ? (
				<div className={s.LoaderNewsBox}>
					<LoaderMain />
				</div>
			) : (
				<>
					<AnimalsList />
					<PaginationGeneral
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						totalPages={totalPagesNotices}
					/>
				</>
			)}
		</section>
	);
};

export default Notices;
