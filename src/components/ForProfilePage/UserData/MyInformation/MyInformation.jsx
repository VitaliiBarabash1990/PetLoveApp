import React from "react";
import { useAuth } from "../../../../hooks/useAuth";
import s from "./MyInformation.module.css";

const MyInformation = () => {
	const { user } = useAuth();

	return (
		<div className={s.MyInfoContainer}>
			<h1>My information</h1>
			<ul>
				<li style={{ borderColor: user.name && "var(--accent-color)" }}>
					<p>{user?.name}</p>
				</li>
				<li style={{ borderColor: user.email && "var(--accent-color)" }}>
					<p>{user?.email}</p>
				</li>
				<li style={{ borderColor: user.phone && "var(--accent-color)" }}>
					<p>{user?.phone || "+38"}</p>
				</li>
			</ul>
		</div>
	);
};

export default MyInformation;
