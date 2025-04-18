import React, { useState } from "react";
import Select from "react-select";
import { useMediaQuery } from "react-responsive";
import { DropdownIndicator } from "./DropDownIndicator";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "../../../../redux/notices/operations";
import { selectCities } from "../../../../redux/notices/selectors.js";

const SearchLocation = ({
	setLocationQuery,
	locationQuery,
	setCurrentPage,
}) => {
	const tablet = useMediaQuery({ minWidth: 768 });
	const dispatch = useDispatch();

	const [inputValue, setInputValue] = useState("");
	const cities = useSelector(selectCities);

	const handleInputChange = (value) => {
		setInputValue(value);
		if (value.length >= 3) {
			dispatch(fetchCities(value));
		}
	};

	const handleChangeLocation = (selectedOption) => {
		setLocationQuery(selectedOption?.value || null);
		setCurrentPage(1);
	};

	const options = cities?.map((city) => ({
		value: city._id,
		label: `${city.stateEn}, ${city.cityEn}`,
	}));

	const selectValue =
		locationQuery === null
			? null
			: options?.find((option) => option.value === locationQuery);

	const formatOptionLabel = ({ label }) => {
		const parts = label.split(new RegExp(`(${inputValue})`, "gi"));
		return (
			<div>
				{parts.map((part, i) =>
					part.toLowerCase() === inputValue.toLowerCase() ? (
						<strong key={i}>{part}</strong>
					) : (
						part
					)
				)}
			</div>
		);
	};

	return (
		<Select
			onInputChange={handleInputChange}
			onChange={handleChangeLocation}
			value={selectValue}
			options={options}
			placeholder="Location"
			maxMenuHeight={216}
			isClearable
			components={{ DropdownIndicator }}
			formatOptionLabel={formatOptionLabel}
			styles={{
				control: (base) => ({
					...base,
					border: "1px solid transparent",
					width: tablet ? "227px" : "100%",
					height: tablet ? "48px" : "42px",
					marginTop: tablet ? "0px" : "12px",
					background: "var(--white-color)",
					borderRadius: "30px",
					fontSize: tablet ? "16px" : "14px",
					boxShadow: "none",
					fontWeight: "500",
					color: "var(--dark-color)",
					fontFamily: "Manrope",
					cursor: "pointer",
					"&:hover": {
						borderColor: "var(--accent-color)",
					},
					"&:focus-within": {
						borderColor: "var(--accent-color)",
						outline: "none",
					},
				}),
				option: (base, state) => ({
					...base,
					fontSize: tablet ? "16px" : "14px",
					fontWeight: "500",
					background: "transparent",
					cursor: "pointer",
					color: state.isFocused
						? "var(--accent-color)"
						: "var(--placeholder-color)",
				}),
				valueContainer: (base) => ({
					...base,
					borderRadius: "30px",
					boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
				}),
				menu: (base) => ({
					...base,
					width: tablet ? "227px" : "100%",
					borderRadius: "15px",
				}),
			}}
		/>
	);
};

export default SearchLocation;
