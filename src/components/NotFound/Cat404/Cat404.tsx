import s from "./Cat404.module.css";

const Cat404 = () => {
	return (
		<div className={s.ContainerContent}>
			<div className={s.IconBox}>
				<svg width={74} height={120}>
					<use xlinkHref={`/sprite.svg#icon-four`}></use>
				</svg>
			</div>
		</div>
	);
};

export default Cat404;
