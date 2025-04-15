import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import ViewedList from "./ViewedList/ViewedList";
import s from "./Viewed.module.css";

const Viewed = () => {
	const { viewedNotices } = useAuth();

	return (
		<div>
			{viewedNotices?.length === 0 ? (
				<p className={s.Text}>
					Oops, <b>looks like there aren't any furries</b> on our adorable page
					yet. Do not worry! When you open notices, they will appear here.
				</p>
			) : (
				<ViewedList />
			)}
		</div>
	);
};

export default Viewed;
