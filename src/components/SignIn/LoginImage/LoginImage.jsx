import { useMediaQuery } from "react-responsive";
import s from "./LoginImage.module.css";
import { LoginMessage } from "../../../lib/messageContent/messageContent";
import Message from "../../Message/Message";

const LoginImage = () => {
	const tablet = useMediaQuery({ minWidth: 768 });
	const desktop = useMediaQuery({ minWidth: 1280 });
	const { imgUrl, name, birthday, comment } = LoginMessage;

	return (
		<div className={s.LoginImageBox}>
			<picture>
				<source
					media="(min-width: 1280px)"
					srcSet="../../../assets/images/login/loginPC.webp 1x, ../../../assets/images/login/loginPC-2x.webp 2x, ../../../assets/images/login/loginPC-3x.webp 3x"
					type="image/webp"
				/>
				<source
					media="(min-width: 768px)"
					srcSet="../../../assets/images/login/dogLogin-tablet.webp 1x, ../../../assets/images/login/dogLogin-tablet-2x.webp 2x, ../../../assets/images/login/dogLogin-tablet-3x.webp 3x"
					type="image/webp"
				/>
				<source
					media="(max-width: 767.98px)"
					srcSet="../../../assets/images/login/dog-mobile.webp 1x, ../../../assets/images/login/dog-mobile-2x.webp 2x, ../../../assets/images/login/dog-mobile-3x.webp 3x"
					type="image/webp"
				/>
				<img
					src="../../../assets/images/login/dog-mobile.webp"
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

export default LoginImage;
