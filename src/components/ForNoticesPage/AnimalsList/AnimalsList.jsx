import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
	AddToFavorites,
	RemoveFromFavorites,
} from "../../../redux/notices/operations";
import { useNotices } from "../../../hooks/useNotices";
import Card from "../Card/Card";
import s from "./AnimalList.module.css";
import Attention from "../Attention/Attention";
import FirstItemNotification from "../FirstItemNotification/FirstItemNotification";

const AnimalsList = () => {
	const { notices } = useNotices();
	const dispatch = useDispatch();
	const [showAttention, setShowAttention] = useState(false);
	const [showFirstNotification, setShowFirstNotification] = useState(false);
	// console.log("Notices", notices);

	const handleAddFavorites = (id) => {
		dispatch(AddToFavorites(id));
	};

	const handleRemoveFavorites = (id) => {
		dispatch(RemoveFromFavorites(id));
	};

	return (
		<>
			{showFirstNotification && (
				<FirstItemNotification
					setShowFirstNotification={setShowFirstNotification}
					showFirstNotification={showFirstNotification}
				/>
			)}
			{showAttention && (
				<Attention
					setShowAttention={setShowAttention}
					showAttention={showAttention}
				/>
			)}
			{notices?.length === 0 && (
				<p className={s.Text}>
					Sorry, <b>no find</b> any notice for these search parameters!
				</p>
			)}
			<ul className={s.ListOfNotices}>
				{notices?.map((notice) => (
					<Card
						notice={notice}
						key={notice?._id}
						setShowAttention={setShowAttention}
						setShowFirstNotification={setShowFirstNotification}
						onAddFavorites={handleAddFavorites}
						onRemoveFavorites={handleRemoveFavorites}
					/>
				))}
			</ul>
		</>
	);
};

export default AnimalsList;
