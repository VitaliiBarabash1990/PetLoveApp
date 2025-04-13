import CreationForm from "../../components/ForAddPetPage/CreationForm/CreationForm";
import ImageDog from "../../components/ImageDog/ImageDog";
import s from "./AddPet.module.css";

const AddPet = () => {
	return (
		<section className={s.HomePageSection}>
			<div className={s.DesktopBox}>
				<ImageDog />
				<div className={s.ContainerCreation}>
					<h1 className={s.MainTitle}>
						Add my pet / <span>Personal details</span>
					</h1>
					<CreationForm />
				</div>
			</div>
		</section>
	);
};

export default AddPet;
