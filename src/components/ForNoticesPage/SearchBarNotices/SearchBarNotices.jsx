import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import CategorySelect from "./CategorySelect/CategorySelect";
import ByGenderSelect from "./ByGenderSelect/ByGenderSelect";
import ByTypeSelect from "./ByTypeSelect/ByTypeSelect";
import s from "./SearchBarNotices.module.css";
import SearchLocation from "./SearchLocation/SearchLocation";
import TextInput from "./TextInput/TextInput";
import RadioSection from "./RadioSection/RadioSection";
import { fetchNotices } from "../../../redux/notices/filtration";

const SearchBarNotices = ({ currentPage, setCurrentPage }) => {
	const [radioSearch, setRadioSearch] = useState(null);
	const [categoryQuery, setCategoryQuery] = useState(null);
	const [genderQuery, setGenderQuery] = useState(null);
	const [byTypeQuery, setByTypeQuery] = useState(null);
	const [locationQuery, setLocationQuery] = useState(null);
	const [textQuery, setTextQuery] = useState("");
	const [inputValue, setInputValue] = useState("");
	const dispatch = useDispatch();

	const handleResetSearch = () => {
		setRadioSearch(null);
		setCategoryQuery(null);
		setGenderQuery(null);
		setByTypeQuery(null);
		setLocationQuery(null);
		setTextQuery("");
		setInputValue("");
		setCurrentPage(1);
	};

	useEffect(() => {
		dispatch(
			fetchNotices({
				page: currentPage,
				keyword: textQuery,
				category: categoryQuery,
				species: byTypeQuery,
				locationId: locationQuery,
				radioSearch: radioSearch,
				sex: genderQuery,
			})
		);
	}, [
		byTypeQuery,
		categoryQuery,
		currentPage,
		dispatch,
		genderQuery,
		locationQuery,
		radioSearch,
		textQuery,
	]);

	return (
		<div className={s.SearchContainer}>
			<TextInput
				setTextQuery={setTextQuery}
				textQuery={textQuery}
				inputValue={inputValue}
				setInputValue={setInputValue}
				setCurrentPage={setCurrentPage}
			/>
			<div className={s.SelectContainer}>
				<CategorySelect
					setCategoryQuery={setCategoryQuery}
					categoryQuery={categoryQuery}
					setCurrentPage={setCurrentPage}
				/>
				<ByGenderSelect
					setGenderQuery={setGenderQuery}
					genderQuery={genderQuery}
					setCurrentPage={setCurrentPage}
				/>
			</div>
			<ByTypeSelect
				setByTypeQuery={setByTypeQuery}
				byTypeQuery={byTypeQuery}
				setCurrentPage={setCurrentPage}
			/>
			<SearchLocation
				setLocationQuery={setLocationQuery}
				locationQuery={locationQuery}
				setCurrentPage={setCurrentPage}
			/>
			<RadioSection
				setRadioSearch={setRadioSearch}
				radioSearch={radioSearch}
				setCurrentPage={setCurrentPage}
			/>
			{(radioSearch ||
				categoryQuery ||
				genderQuery ||
				byTypeQuery ||
				locationQuery ||
				textQuery !== "") && (
				<button
					type="button"
					className={s.ResetFilterBtn}
					onClick={handleResetSearch}
				>
					Reset
				</button>
			)}
		</div>
	);
};

export default SearchBarNotices;
