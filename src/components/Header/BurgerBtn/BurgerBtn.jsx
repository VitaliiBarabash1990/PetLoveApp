import React, { useState, useEffect } from "react";
import { noScroll } from "../../../functions/noScroll";
import MobileMenu from "../../MobileMenu/MobileMenu";
import s from "./BurgerBtn.module.css";

const BurgerBtn = ({ isHomepage }) => {
	const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

	useEffect(() => {
		noScroll(isShowMobileMenu);
	}, [isShowMobileMenu]);

	return (
		<>
			<div className={s.BurgerBtnContainer}>
				<button
					className={s.Button}
					type="button"
					onClick={() => setIsShowMobileMenu((prev) => !prev)}
					data-ishomepage={isHomepage.toString()}
				>
					<svg width={32} height={32}>
						<use href="sprite.svg#icon-burger-menu"></use>
					</svg>
				</button>
			</div>
			{isShowMobileMenu && (
				<MobileMenu
					setIsShowMobileMenu={setIsShowMobileMenu}
					isHomepage={isHomepage}
				/>
			)}
		</>
	);
};

export default BurgerBtn;
