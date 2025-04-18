import { useMediaQuery } from "react-responsive";
import dogMobile from "../../../assets/images/add-pet/dogBrown.webp";
import dogMobile2x from "../../../assets/images/add-pet/dogBrown-2x.webp";
import dogMobile3x from "../../../assets/images/add-pet/dogBrown-3x.webp";
import dogTablet from "../../../assets/images/add-pet/dogAdd-tablet.webp";
import dogTablet2x from "../../../assets/images/add-pet/dogAdd-tablet-2x.webp";
import dogTablet3x from "../../../assets/images/add-pet/dogAdd-tablet-3x.webp";
import dogDesktop from "../../../assets/images/add-pet/addPetPC.webp";
import dogDesktop2x from "../../../assets/images/add-pet/addPetPC-2x.webp";
import dogDesktop3x from "../../../assets/images/add-pet/addPetPC-3x.webp";
import s from "./ImageDog.module.css";

const ImageDog = () => {
	const desktop = useMediaQuery({ minWidth: 1280 });

	return (
		<div>
			<div className={s.ImageBox}>
				<picture>
					<source
						media="(min-width: 1280px)"
						srcSet={`${dogDesktop} 1x, ${dogDesktop2x} 2x, ${dogDesktop3x} 3x`}
						type="image/webp"
					/>
					<source
						media="(min-width: 768px)"
						srcSet={`${dogTablet} 1x, ${dogTablet2x} 2x, ${dogTablet3x} 3x`}
						type="image/webp"
					/>
					<source
						media="(max-width: 767.98px)"
						srcSet={`${dogMobile} 1x, ${dogMobile2x} 2x, ${dogMobile3x} 3x`}
						type="image/webp"
					/>
					<img src={dogMobile} alt="One cute dog" loading="lazy" />
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
