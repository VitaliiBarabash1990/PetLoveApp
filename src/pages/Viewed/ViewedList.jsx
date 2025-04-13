import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import s from "./Viewed.module.css";
import Card from "../../components/ForNoticesPage/Card/Card";

export const ViewedList = () => {
	const { viewedNotices } = useAuth();
	const [, setShowFirstNotification] = useState(false);

	return (
		<ul className={s.ListFavorites}>
			{viewedNotices.map((notice) => (
				<Card
					key={notice._id}
					notice={notice}
					setShowAttention={null}
					setShowFirstNotification={setShowFirstNotification}
				/>
			))}
		</ul>
	);
};
