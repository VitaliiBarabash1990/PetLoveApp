import s from "./PetAvatar.module.css";

const PetAvatar = ({ petImageURL }) => {
	return (
		<div className={s.AvatarContainer}>
			<div className={s.ImageBox}>
				{petImageURL !== "" ? (
					<img src={petImageURL} alt="Pet's avatar" />
				) : (
					<svg width={34} height={34}>
						<use href="/sprite.svg#icon-footprint"></use>
					</svg>
				)}
			</div>
		</div>
	);
};

export default PetAvatar;
