import s from "./IconCalendar.module.css";

const IconCalendar = () => {
	return (
		<svg className={s.Icon} width={18} height={18}>
			<use href="/sprite.svg#icon-calendar"></use>
		</svg>
	);
};

export default IconCalendar;
