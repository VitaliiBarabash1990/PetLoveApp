import React from "react";
import Modal from "../Modal/Modal";
import NavMenuMobile from "./NavMenuMobile/NavMenuMobile";
import AuthNav from "../AuthNav/AuthNav";
import s from "./MobileMenu.module.css";

const MobileMenu = ({ setIsShowMobileMenu, isHomepage }) => {
	return (
		<Modal setIsShowMobileMenu={setIsShowMobileMenu}>
			<div
				className={s.MobileMenuContainer}
				data-ishomepage={isHomepage.toString()}
			>
				<button type="button" onClick={() => setIsShowMobileMenu(false)}>
					<svg width={32} height={32}>
						<use href="sprite.svg#icon-close"></use>
					</svg>
				</button>
				<NavMenuMobile
					isHomepage={isHomepage}
					setIsShowMobileMenu={setIsShowMobileMenu}
				/>
				<AuthNav setIsShowMobileMenu={setIsShowMobileMenu} />
			</div>
		</Modal>
	);
};

export default MobileMenu;
