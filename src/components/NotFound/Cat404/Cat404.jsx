import s from "./Cat404.module.css";

const Cat404 = () => {
	return (
		<div className={s.ContainerContent}>
			<div className={s.IconBox}>
				<svg width={74} height={120}>
					<use href={`/sprite.svg#icon-four`}></use>
				</svg>
			</div>
			<div className={s.CatImgBox}>
				<picture>
					<source
						media="(min-width: 1280px)"
						srcSet={
							"../../../assets/images/notFound/errorPC.webp 1x, ../../../src/assets/images/notFound/errorPC-2x.webp 2x, ../../../src/assets/images/notFound/errorPC-3x.webp 3x"
						}
						type="image/webp"
					/>
					<source
						media="(min-width: 768px)"
						srcSet={
							"../../../assets/images/notFound/cat404tablet.webp 1x, ../../../assets/images/notFound/cat404tablet-2x.webp 2x, ../../../assets/images/notFound/cat404tablet-3x.webp 3x"
						}
						type="image/webp"
					/>
					<source
						media="(max-width: 767.98px)"
						srcSet={
							"../../../assets/images/notFound/cat404.webp 1x, ../../../assets/images/notFound/cat404-2x.webp 2x, ../../../assets/images/notFound/cat404-3x.webp 3x"
						}
						type="image/webp"
					/>
					<img
						src="../../../assets/images/notFound/cat404.webp"
						alt="One cute cat"
					/>
				</picture>
			</div>
			<div className={s.IconBox}>
				<svg width={74} height={120}>
					<use href={`/sprite.svg#icon-four`}></use>
				</svg>
			</div>
		</div>
	);
};

export default Cat404;
