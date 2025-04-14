// @ts-nocheck
import React from "react";
import { useDispatch } from "react-redux";
import PetInfo from "../PetInfo/PetInfo";
import { removePet } from "../../../../redux/auth/operations";
import s from "./PetItem.module.css";

const PetItem = ({ pet }) => {
	const { title, imgURL, _id } = pet;
	const dispatch = useDispatch();

	const handleDeletePet = () => dispatch(removePet(_id));

	return (
		<li className={s.ItemContainer}>
			<div className={s.PetImgBox}>
				<img src={imgURL} alt={title} />
			</div>
			<div className={s.Content}>
				<h3>{title}</h3>
				<PetInfo pet={pet} />
			</div>
			<button
				type="button"
				className={s.DeletePetBtn}
				onClick={handleDeletePet}
			>
				<svg width={16} height={16}>
					<use href="sprite.svg#icon-trash"></use>
				</svg>
			</button>
		</li>
	);
};

export default PetItem;
