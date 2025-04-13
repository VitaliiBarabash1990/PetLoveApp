import { useDispatch } from "react-redux";
import useAuth from "../../../../../hooks/useAuth";
import s from "./Buttons.module.css";
import { Link } from "react-router-dom";

const Buttons = ({
	isFavorite,
	id,
	setIsFavorite,
	setShowFirstNotification,
}) => {
	const dispatch = useDispatch();
	const { favoritesNotices } = useAuth();

	const handleAddFavorites = () => {
		if (favoritesNotices?.length === 0) {
			setShowFirstNotification(true);
		}
		dispatch(AddToFavorites(id));
		setIsFavorite(true);
	};

	const handleRemoveFavorites = () => {
		dispatch(RemoveFromFavorites(id));
		setIsFavorite(false);
	};

	return (
		<div className={s.ButtonsContainer}>
			<button
				className={s.AddRemoveBtn}
				type="button"
				onClick={isFavorite ? handleRemoveFavorites : handleAddFavorites}
			>
				{isFavorite ? "Remove from" : "Add to"}
				<svg width={18} height={18}>
					<use href="sprite.svg#icon-heart"></use>
				</svg>
			</button>
			<Link
				to={"mailto:biggest5family@gmail.com"}
				className={s.ContactBtn}
				target="_blank"
			>
				Contact
			</Link>
		</div>
	);
};

export default Buttons;
