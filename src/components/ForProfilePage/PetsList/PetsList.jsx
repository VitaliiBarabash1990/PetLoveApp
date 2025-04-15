import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import PetItem from "./PetItem/PetItem";
import s from "./PetsList.module.css";

const PetsList = () => {
	const { pets } = useAuth();

	return (
		<ul className={s.ListOfPets}>
			{pets.map((pet) => (
				<PetItem key={pet._id} pet={pet} />
			))}
		</ul>
	);
};

export default PetsList;
