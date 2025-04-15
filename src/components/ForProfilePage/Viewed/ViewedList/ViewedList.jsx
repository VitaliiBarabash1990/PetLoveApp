import React, { useState } from "react";
import { useAuth } from "../../../../hooks/useAuth";
import Card from "../../../ForNoticesPage/Card/Card";
import s from "./ViewedList.module.css";

const ViewedList = () => {
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

export default ViewedList;
