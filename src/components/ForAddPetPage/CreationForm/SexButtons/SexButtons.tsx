import s from "./SexButtons.module.css";

type SexButtonsProps = {
	setSexPet: (value: string) => void;
	sexPet: string;
};

const SexButtons: React.FC<SexButtonsProps> = ({ setSexPet, sexPet }) => {
	const handleChooseSex = (e: React.MouseEvent<HTMLLIElement>) => {
		const choosenValue = e.currentTarget.dataset.value;
		if (!choosenValue) return;
		setSexPet(choosenValue);
	};

	return (
		<ul className={s.ListItems}>
			<li className={s.FemaleLi} data-value="female" onClick={handleChooseSex}>
				<svg width={24} height={24} data-value={sexPet}>
					<use href="/sprite.svg#icon-female"></use>
				</svg>
			</li>
			<li className={s.MaleLi} data-value="male" onClick={handleChooseSex}>
				<svg width={24} height={24} data-value={sexPet}>
					<use href="/sprite.svg#icon-male"></use>
				</svg>
			</li>
			<li
				className={s.MultipleLi}
				data-value="multiple"
				onClick={handleChooseSex}
			>
				<svg width={24} height={24} data-value={sexPet}>
					<use href="sprite.svg#icon-sex"></use>
				</svg>
			</li>
		</ul>
	);
};

export default SexButtons;
