import React, { useEffect } from "react";
import imgModal from "../../../assets/images/modals/formodal.webp";
import ModalGeneral from "../../ModalGeneral/ModalGeneral";
import s from "./FirstItemNotification.module.css";
import { Link } from "react-router-dom";

const FirstItemNotification = ({
	setShowFirstNotification,
	showFirstNotification,
}) => {
	useEffect(() => {
		const handleKeyPress = (e) => {
			if (e.key === "Escape") {
				showFirstNotification && setShowFirstNotification(false);
			}
		};

		document.addEventListener("keydown", handleKeyPress);
		return () => {
			document.removeEventListener("keydown", handleKeyPress);
		};
	}, [setShowFirstNotification, showFirstNotification]);

	useEffect(() => {
		if (showFirstNotification) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [showFirstNotification]);

	return (
		<ModalGeneral fn={setShowFirstNotification}>
			<div className={s.ImgContainer}>
				<div>
					<img src={imgModal} alt="Animated white-orange cat" />
				</div>
				<p>Congrats</p>
			</div>
			<p className={s.TextCongrats}>
				The first fluff in the favorites! May your friendship be the happiest
				and filled with fun.
			</p>
			<Link to={"/profile"} className={s.ButtonLink}>
				Go to profile
			</Link>
		</ModalGeneral>
	);
};

export default FirstItemNotification;
