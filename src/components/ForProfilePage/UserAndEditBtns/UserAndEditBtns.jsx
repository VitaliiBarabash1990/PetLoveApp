import React from "react";
import s from "./UserAndEditBtns.module.css";

const UserAndEditBtns = ({ setShowEditForm }) => {
	return (
		<div className={s.ContainerFlex}>
			<div className={s.UserBox}>
				<div>
					<p>User</p>
					<svg width={18} height={18}>
						<use href="/sprite.svg#icon-user"></use>
					</svg>
				</div>
			</div>
			<button
				type="button"
				className={s.EditBtn}
				onClick={() => setShowEditForm(true)}
			>
				<svg width={18} height={18}>
					<use href="sprite.svg#icon-pencil"></use>
				</svg>
			</button>
		</div>
	);
};

export default UserAndEditBtns;
