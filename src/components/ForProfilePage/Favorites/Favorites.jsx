import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../../redux/auth/operations";
import { RemoveFromFavorites } from "../../../redux/notices/operations";
import FavoriteCard from "./FavoriteCard/FavoriteCard";
import useAuth from "../../../hooks/useAuth";
import NoCollectionText from "../NoCollectionText/NoCollectionText";
import s from "./Favorites.module.css";

const Favorites = () => {
	const { favoritesNotices } = useAuth();
	const dispatch = useDispatch();
	const [favorites, setFavorites] = useState(favoritesNotices);
	const prevFavoritesLength = useRef();

	useEffect(() => {
		setFavorites(favoritesNotices);
		if (prevFavoritesLength.current !== favoritesNotices?.length) {
			dispatch(refreshUser());
		}
		prevFavoritesLength.current = favoritesNotices?.length;
	}, [dispatch, favoritesNotices]);

	const handleRemoveFavorites = (id) => {
		dispatch(RemoveFromFavorites(id));
		setFavorites(favorites.filter((fav) => fav._id !== id));
	};

	return (
		<>
			{favorites?.length > 0 ? (
				<ul className={s.ListFavorites}>
					{favorites?.map((notice) => (
						<FavoriteCard
							key={notice._id}
							notice={notice}
							onRemoveFavorites={handleRemoveFavorites}
							favorites={favorites}
						/>
					))}
				</ul>
			) : (
				<NoCollectionText />
			)}
		</>
	);
};

export default Favorites;
