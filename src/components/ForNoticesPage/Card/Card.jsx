import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { formatBirthday } from "../../../functions/formatBirthday";
import useAuth from "../../../hooks/useAuth";
import DetailsModal from "../DetailsModal/DetailsModal";
import { viewedPet } from "../../../redux/auth/operations";
import s from "./Card.module.css";

const Card = ({
	notice,
	setShowAttention,
	setShowFirstNotification,
	onAddFavorites,
	onRemoveFavorites,
}) => {
	const location = useLocation();
	const dispatch = useDispatch();
	const [showDetails, setShowDetails] = useState(false);
	const [isViewedPage, setIsViewedPage] = useState(false);
	const {
		imgURL,
		name,
		title,
		birthday,
		sex,
		species,
		popularity,
		comment,
		category,
		_id,
	} = notice;
	const { isLoggedIn, favoritesNotices } = useAuth();
	const [isFavorite, setIsFavorite] = useState(
		favoritesNotices?.find((fav) => (fav._id === _id ? true : false))
	);
	const formattedDate = formatBirthday(birthday);

	const details = [
		{ label: "Name", value: name },
		{ label: "Birthday", value: formattedDate },
		{ label: "Sex", value: sex },
		{ label: "Species", value: species },
		{ label: "Category", value: category },
	];

	useEffect(() => {
		if (location?.pathname === "/profile/viewed") {
			setIsViewedPage(true);
		} else {
			setIsViewedPage(false);
		}
	}, [location?.pathname]);

	useEffect(() => {
		if (showDetails && !isViewedPage) {
			dispatch(viewedPet(_id));
		}
	}, [_id, isViewedPage, showDetails]);

	const handleAddFavorites = () => {
		if (!isLoggedIn) {
			setShowAttention(true);
		} else {
			if (favoritesNotices?.length === 0) {
				setShowFirstNotification(true);
			}
			onAddFavorites(_id);
			setIsFavorite(true);
		}
	};

	const handleRemoveFavorites = () => {
		onRemoveFavorites(_id);
		setIsFavorite(false);
	};

	const handleLearnMore = () =>
		!isLoggedIn ? setShowAttention(true) : setShowDetails(true);

	return (
		<>
			{showDetails && (
				<DetailsModal
					setShowDetails={setShowDetails}
					notice={notice}
					showDetails={showDetails}
					isFavorite={isFavorite}
					setIsFavorite={setIsFavorite}
					setShowFirstNotification={setShowFirstNotification}
				/>
			)}
			<li
				className={s.CardContainer}
				data-isviewedpage={isViewedPage.toString()}
			>
				<div
					className={s.ImageAnimalContainer}
					data-isviewedpage={isViewedPage.toString()}
				>
					<img src={imgURL} alt={title} />
				</div>
				<div style={{ width: "100%" }}>
					<div className={s.TitlePopularityBox}>
						<h2>{title}</h2>
						<span>
							<svg width={16} height={16}>
								<use href={`/sprite.svg#icon-star`}></use>
							</svg>{" "}
							{popularity}
						</span>
					</div>
					<ul className={s.ListInfo}>
						{details.map(({ label, value }) => (
							<li key={label}>
								<p>
									{label} <span>{value}</span>
								</p>
							</li>
						))}
					</ul>
					<p className={s.CommentText}>{comment}</p>
				</div>
				<div className={s.ButtonsCardBox}>
					<button
						type="button"
						className={s.ButtonLearnMore}
						onClick={handleLearnMore}
					>
						Learn more
					</button>
					{location?.pathname !== "/profile/viewed" && (
						<button
							type="button"
							className={s.BtnLike}
							onClick={isFavorite ? handleRemoveFavorites : handleAddFavorites}
						>
							<svg width={18} height={18}>
								<use
									href={
										isFavorite
											? `/sprite.svg#icon-trash`
											: `/sprite.svg#icon-heart`
									}
								></use>
							</svg>
						</button>
					)}
				</div>
			</li>
		</>
	);
};

export default Card;
