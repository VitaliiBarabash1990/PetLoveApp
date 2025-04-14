import React, { useState } from "react";
import { formatBirthday } from "../../../../functions/formatBirthday";
import DetailsModal from "../../../ForNoticesPage/DetailsModal/DetailsModal";
import s from "./FavoriteCard.module.css";

const FavCard = ({ notice, onRemoveFavorites, favorites }) => {
	const [showDetails, setShowDetails] = useState(false);
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
	const [isFavorite, setIsFavorite] = useState(
		favorites?.find((fav) => (fav._id === _id ? true : false))
	);
	const formattedDate = formatBirthday(birthday);

	const details = [
		{ label: "Name", value: name },
		{ label: "Birthday", value: formattedDate },
		{ label: "Sex", value: sex },
		{ label: "Species", value: species },
		{ label: "Category", value: category },
	];

	const handleRemoveFavorites = () => onRemoveFavorites(_id);

	const handleLearnMore = () => setShowDetails(true);

	return (
		<>
			{showDetails && (
				<DetailsModal
					setShowDetails={setShowDetails}
					notice={notice}
					showDetails={showDetails}
					isFavorite={isFavorite}
					setIsFavorite={setIsFavorite}
				/>
			)}
			<li className={s.CardContainer}>
				<div className={s.ImageAnimalContainer}>
					<img src={imgURL} alt={title} />
				</div>
				<div>
					<div className={s.TitlePopularityBox}>
						<h2>{title}</h2>
						<span>
							<svg width={16} height={16}>
								<use href="sprite.svg#icon-star"></use>
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
					<button
						type="button"
						className={s.BtnRemove}
						onClick={handleRemoveFavorites}
					>
						<svg width={18} height={18}>
							<use href="/sprite.svg#icon-trash"></use>
						</svg>
					</button>
				</div>
			</li>
		</>
	);
};

export default FavCard;
