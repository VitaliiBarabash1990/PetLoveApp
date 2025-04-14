import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/auth/operations";
import ModalGeneral from "../../ModalGeneral/ModalGeneral";
import imgModal from "../../../assets/images/modals/formodal.webp";
import s from "./ModalLogout.module.css";

const ModalLogout = ({ setShowLogout, showLogout }) => {
	const dispatch = useDispatch();
	const handleCloseModal = () => setShowLogout(false);
	const handleLogout = () => dispatch(logOut());

	useEffect(() => {
		const handleKeyPress = (e) => {
			if (e.key === "Escape") {
				showLogout && setShowLogout(false);
			}
		};

		document.addEventListener("keydown", handleKeyPress);
		return () => {
			document.removeEventListener("keydown", handleKeyPress);
		};
	}, [setShowLogout, showLogout]);

	useEffect(() => {
		if (showLogout) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [showLogout]);

	return (
		<ModalGeneral fn={setShowLogout}>
			<div className={s.ImgContainer}>
				<div>
					<img src={imgModal} alt="Animated white-orange cat" />
				</div>
				<p>Already leaving?</p>
			</div>
			<div className={s.BtnsBox}>
				<button
					type="button"
					className={s.LogoutConfirmBtn}
					onClick={handleLogout}
				>
					Yes
				</button>
				<button
					type="button"
					className={s.CancelBtn}
					onClick={handleCloseModal}
				>
					Cancel
				</button>
			</div>
		</ModalGeneral>
	);
};

export default ModalLogout;
