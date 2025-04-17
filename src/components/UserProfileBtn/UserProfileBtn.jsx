import React from "react";
import { useMediaQuery } from "react-responsive";
import useAuth from "../../hooks/useAuth";
import s from "./UserProfileBtn.module.css";
import { Link } from "react-router-dom";

const UserProfileBtn = ({ isHomepage }) => {
	const tablet = useMediaQuery({ minWidth: 768 });
	const { user } = useAuth();
	console.log("UserProfileBtn");

	return (
		<>
			<Link to={"/profile"} className={s.UserLinkBtn}>
				{user?.avatar ? (
					<img src={user.avatar} alt={`Avatar of ${user.name}`} />
				) : (
					<svg width={20} height={20}>
						<use href="/sprite.svg#icon-user"></use>
					</svg>
				)}
			</Link>
			{tablet && (
				<p className={s.UserName} data-ishomepage={isHomepage.toString()}>
					{user.name}
				</p>
			)}
		</>
	);
};

export default UserProfileBtn;
