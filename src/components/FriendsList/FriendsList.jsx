import React from "react";
import { useFriends } from "../../hooks/useFriends";
import FriendItem from "./FriendItem/FriendItem";
import s from "./FriendList.module.css";

const FriendsList = () => {
	const { friends } = useFriends();

	return (
		<ul className={s.CardsListContainer}>
			{friends.map((friend) => (
				<FriendItem key={friend._id} friend={friend} />
			))}
		</ul>
	);
};

export default FriendsList;
