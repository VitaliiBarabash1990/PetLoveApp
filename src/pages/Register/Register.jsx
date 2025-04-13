import RegistrationForm from "../../components/Registration/RegistrationForm/RegistrationForm";
import RegistrationImage from "../../components/Registration/RegistrationImage/RegistrationImage";
import s from "./Register.module.css";
const Register = () => {
	return (
		<section className={s.HomePageSection}>
			<div className={s.DesctopBox}>
				<RegistrationImage />
				<RegistrationForm />
			</div>
		</section>
	);
};

export default Register;
