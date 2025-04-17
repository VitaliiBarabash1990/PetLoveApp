// @ts-nocheck
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFriends } from "../../hooks/useFriends";
import { fetchFriends } from "../../redux/friends/operations";
import FriendsList from "../../components/FriendsList/FriendsList";
import LoaderMain from "../../components/Common/LoaderMain/LoaderMain";
import s from "./Friends.module.css";

const Friends = () => {
	const dispatch = useDispatch();
	const { isLoadFriends } = useFriends();

	useEffect(() => {
		dispatch(fetchFriends());
	}, [dispatch]);

	return (
		<section className={s.HomePageSection}>
			<h1 className={s.TitleOfPage}>Our friends</h1>
			{isLoadFriends ? (
				<div className={s.LoaderNewsBox}>
					<LoaderMain />
				</div>
			) : (
				<FriendsList />
			)}
		</section>
	);
};

export default Friends;
