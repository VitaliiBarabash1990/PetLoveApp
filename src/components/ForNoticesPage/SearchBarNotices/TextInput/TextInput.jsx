import React from "react";
import s from "./TextInput.module.css";

const TextInput = ({ setTextQuery, textQuery, inputValue, setInputValue }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue !== "") {
			setTextQuery(inputValue);
		} else {
			alert("You can't put empty field");
		}
	};

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleCancelSearch = () => {
		setInputValue("");
		setTextQuery("");
	};

	return (
		<form className={s.SearchForm} onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Search"
				value={inputValue}
				onChange={handleInputChange}
				disabled={textQuery === "" ? false : true}
			/>
			{inputValue !== "" && (
				<button
					type="button"
					className={s.CancelSearchBtn}
					onClick={handleCancelSearch}
				>
					<svg width={18} height={18}>
						<use href="sprite.svg#icon-close"></use>
					</svg>
				</button>
			)}
			<button type="submit" className={s.SubmitSearchBtn}>
				<svg width={18} height={18}>
					<use href="sprite.svg#icon-search"></use>
				</svg>
			</button>
		</form>
	);
};

export default TextInput;
