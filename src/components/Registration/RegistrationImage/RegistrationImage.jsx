import { useMediaQuery } from "react-responsive";
import s from "./RegistrationImage.module.css";
import Message from "../../Message/Message";
import { RegisterMessage } from "../../../lib/messageContent/messageContent";

const RegistrationImage = () => {
	const tablet = useMediaQuery({ minWidth: 768 });
	const desktop = useMediaQuery({ minWidth: 1280 });
	const { imgUrl, name, birthday, comment } = RegisterMessage;

	return (
		<div className={s.RegisterImageBox}>
			<picture>
				<source
					media="(min-width: 1280px)"
					srcSet={
						"../../../assets/images/register/registerPC.webp 1x, ../../../assets/images/register/registerPC-2x.webp 2x, ../../../assets/images/register/registerPC-3x.webp 3x"
					}
					type="image/webp"
				/>
				<source
					media="(min-width: 768px)"
					srcSet={
						"../../../assets/images/register/catRegister-tablet.webp 1x, ../../../assets/images/register/catRegister-tablet-2x.webp 2x, ../../../assets/images/register/catRegister-tablet-3x.webp 3x"
					}
					type="image/webp"
				/>
				<source
					media="(max-width: 767.98px)"
					srcSet={
						"../../../assets/images/register/cat-mobile.webp 1x, ../../../assets/images/register/cat-mobile-2x.webp 2x, ../../../assets/images/register/cat-mobile-3x.webp 3x"
					}
					type="image/webp"
				/>
				<img
					src="../../../assets/images/register/cat-mobile.webp"
					alt="Orange color Cat"
					loading="lazy"
				/>
			</picture>
			<svg width={332}>
				<use
					href={
						desktop ? `/sprite.svg#icon-shape-pc` : `/sprite.svg#icon-shape`
					}
				></use>
			</svg>
			{tablet && (
				<Message
					imgUrl={imgUrl}
					name={name}
					birthday={birthday}
					comment={comment}
				/>
			)}
		</div>
	);
};

export default RegistrationImage;
