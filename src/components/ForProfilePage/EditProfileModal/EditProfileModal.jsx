import React, { useState, useEffect } from "react";
import ModalGeneral from "../../ModalGeneral/ModalGeneral";
import useAuth from "../../../hooks/useAuth";
import FormEditUser from "./FormEditUser/FormEditUser";
import s from "./EditProfileModal.module.css";

const EditProfileModal = ({ setShowEditForm, showEditForm }) => {
	const { user } = useAuth();
	const [imageURL, setImageURL] = useState(user?.avatar || "");

	useEffect(() => {
		const handleKeyPress = (e) => {
			if (e.key === "Escape") {
				showEditForm && setShowEditForm(false);
			}
		};

		document.addEventListener("keydown", handleKeyPress);
		return () => {
			document.removeEventListener("keydown", handleKeyPress);
		};
	}, [setShowEditForm, showEditForm]);

	useEffect(() => {
		if (showEditForm) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [showEditForm]);

	return (
		<ModalGeneral fn={setShowEditForm}>
			<div className={s.EditModalContainer}>
				<h1>Edit information</h1>
				<div className={s.AvatarBox}>
					{imageURL !== "" ? (
						<img src={imageURL} alt="user's avatar" />
					) : (
						<svg width={40} height={40}>
							<use href="/sprite.svg#icon-user"></use>
						</svg>
					)}
				</div>
				<FormEditUser
					setImageURL={setImageURL}
					setShowEditForm={setShowEditForm}
				/>
			</div>
		</ModalGeneral>
	);
};

export default EditProfileModal;
