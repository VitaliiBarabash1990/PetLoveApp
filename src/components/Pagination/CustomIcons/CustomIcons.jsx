import React from "react";
import s from "./CustomIcons.module.css";

export const NextIcon = () => {
	return (
		<svg width={18} height={18}>
			<use href="/sprite.svg#icon-right"></use>
		</svg>
	);
};

export const PreviousIcon = () => {
	return (
		<svg width={18} height={18}>
			<use href="/sprite.svg#icon-left"></use>
		</svg>
	);
};

export const LastIcon = () => {
	return (
		<div className={s.IconContainer}>
			<svg width={18} height={18}>
				<use href="sprite.svg#icon-right"></use>
			</svg>
			<svg width={18} height={18}>
				<use href="sprite.svg#icon-right"></use>
			</svg>
		</div>
	);
};

export const FirstIcon = () => {
	return (
		<div className={s.IconContainer}>
			<svg width={20} height={20}>
				<use href="/sprite.svg#icon-left"></use>
			</svg>
			<svg width={20} height={20}>
				<use href="/sprite.svg#icon-left"></use>
			</svg>
		</div>
	);
};
