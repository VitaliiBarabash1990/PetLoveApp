import React from "react";
import { formatBirthday } from "../../../../functions/formatBirthday";
import s from "./PetInfo.module.css";

const PetInfo = ({ pet }) => {
	const { name, birthday, sex, species } = pet;
	const formattedDate = formatBirthday(birthday);

	const details = [
		{ label: "Name", value: name },
		{ label: "Birthday", value: formattedDate },
		{ label: "Sex", value: sex },
		{ label: "Species", value: species },
	];

	return (
		<ul className={s.ListInfoPet}>
			{details.map(({ label, value }) => (
				<li key={label}>
					<p>
						{label} <span>{value}</span>
					</p>
				</li>
			))}
		</ul>
	);
};

export default PetInfo;
