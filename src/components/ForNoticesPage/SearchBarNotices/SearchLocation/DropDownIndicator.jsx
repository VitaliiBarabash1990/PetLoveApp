import { components } from "react-select";
import React from "react";

export const DropdownIndicator = (props) => {
	return (
		<components.DropdownIndicator {...props}>
			<svg
				width={18}
				height={18}
				style={{
					fill: "var(--white-color)",
					stroke: "var(--dark-color)",
					marginRight: "10px",
				}}
			>
				<use href="/sprite.svg#icon-search"></use>
			</svg>
		</components.DropdownIndicator>
	);
};
