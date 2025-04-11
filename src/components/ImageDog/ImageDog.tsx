import { useMediaQuery } from "react-responsive";
import s from "./ImageDog.module.css";

const ImageDog = () => {
	const desktop = useMediaQuery({ minWidth: 1280 });

	return (
		<div>
			<div className={s.ImageBox}>
				<picture>
					<source
						media="(min-width: 1280px)"
						srcSet="../../../assets/images/add-pet/addPetPC.webp 1x, ../../../assets/images/add-pet/addPetPC-2x.webp 2x, ../../../assets/images/add-pet/addPetPC-3x.webp 3x"
						type="image/webp"
					/>
					<source
						media="(min-width: 768px)"
						srcSet="../../../assets/images/add-pet/dogAdd-tablet.webp 1x, ../../../assets/images/add-pet/dogAdd-tablet-2x.webp 2x, ../../../assets/images/add-pet/dogAdd-tablet-3x.webp 3x"
						type="image/webp"
					/>
					<source
						media="(max-width: 767.98px)"
						srcSet="../../../assets/images/add-pet/dogBrown.webp 1x, ../../../assets/images/add-pet/dogBrown-2x.webp 2x, ../../../assets/images/add-pet/dogBrown-3x.webp 3x"
						type="image/webp"
					/>
					<img
						src="../../../assets/images/add-pet/dogBrown.webp"
						alt="One cute dog"
						loading="lazy"
					/>
				</picture>
				<svg width={332}>
					<use
						href={
							desktop ? "/sprite.svg#icon-shape-pc" : "/sprite.svg#icon-shape"
						}
					></use>
				</svg>
			</div>
		</div>
	);
};

export default ImageDog;
