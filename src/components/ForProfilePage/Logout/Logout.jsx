import React from "react";
import s from "./Logout.module.css";

const Logout = ({ setShowLogout }) => {
	return (
		<button
			type="button"
			className={s.LogoutBtn}
			onClick={() => setShowLogout(true)}
		>
			logout
		</button>
	);
};

export default Logout;
