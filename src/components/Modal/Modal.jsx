import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import s from "./Modal.module.css";

const Modal = ({ children, setIsShowMobileMenu }) => {
	const [isHomepage, setIsHomepage] = useState(false);
	const modalRoot = document?.getElementById("modal-root");
	const backdropRef = useRef(null);
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === "/home" || location.pathname === "/") {
			setIsHomepage(true);
		} else {
			setIsHomepage(false);
		}
	}, [location.pathname]);

	const handleBackdropClick = (e) => {
		if (e.target === backdropRef?.current) {
			setIsShowMobileMenu && setIsShowMobileMenu(false);
		}
	};

	return (
		<>
			{createPortal(
				<div
					ref={backdropRef}
					className={s.Backdrop}
					onClick={handleBackdropClick}
				>
					<div
						className={s.ModalContainer}
						data-ishomepage={isHomepage.toString()}
					>
						{children}
					</div>
				</div>,
				modalRoot
			)}
		</>
	);
};

export default Modal;
