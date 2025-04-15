import React from "react";
import { useAuth } from "../../../../hooks/useAuth";
import s from "./AvatarData.module.css";

const NoAvatar = ({ setShowEditForm }) => {
	const { user } = useAuth();

	return (
		<div className={s.ContainerBox}>
			<div className={s.AvatarBox}>
				{user?.avatar ? (
					<img src={user.avatar} alt={`Avatar of ${user.name}`} />
				) : (
					<svg width={40} height={40}>
						<use href="sprite.svg#icon-user"></use>
					</svg>
				)}
			</div>
			{!user.avatar && (
				<button
					type="button"
					className={s.UploadPhotoButton}
					onClick={() => setShowEditForm(true)}
				>
					Upload photo
				</button>
			)}
		</div>
	);
};

export default NoAvatar;
