import React, { useState } from "react";
import ModalLogout from "../../ForProfilePage/ModalLogout/ModalLogout";
import s from "./LogoutHeader.module.css";

const LogoutHeader = () => {
	const [showLogoutModal, setShowLogoutModal] = useState(false);

	return (
		<>
			{showLogoutModal && (
				<ModalLogout
					showLogout={showLogoutModal}
					setShowLogout={setShowLogoutModal}
				/>
			)}
			<button
				type="button"
				className={s.LogoutButton}
				onClick={() => setShowLogoutModal(true)}
			>
				log out
			</button>
		</>
	);
};

export default LogoutHeader;
