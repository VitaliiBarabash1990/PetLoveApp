import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { fetchNews } from "../../../redux/news/operations";
import s from "./SearchBar.module.css";

const SearchBar = ({ setSearchValue, setCurrentPage, searchValue }) => {
	const [inputValue, setInputValue] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue !== "") {
			setSearchValue(inputValue);
			setCurrentPage(1);
		} else {
			toast.warning("You can't put empty field");
		}
	};

	const handleInputChange = (e) => setInputValue(e.target.value);

	const handleCancelSearch = async () => {
		setInputValue("");
		setSearchValue("");
		setCurrentPage(1);
		await dispatch(fetchNews({ page: 1, searchQuery: null }));
	};

	return (
		<form className={s.SearchForm} onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Search"
				value={inputValue}
				onChange={handleInputChange}
				disabled={searchValue === "" ? false : true}
			/>
			{inputValue !== "" && (
				<button
					type="button"
					className={s.CancelSearchBtn}
					onClick={handleCancelSearch}
				>
					<svg width={18} height={18}>
						<use href="/sprite.svg#icon-close"></use>
					</svg>
				</button>
			)}
			<button type="submit" className={s.SubmitSearchBtn}>
				<svg width={18} height={18}>
					<use href="/sprite.svg#icon-search"></use>
				</svg>
			</button>
		</form>
	);
};

export default SearchBar;
