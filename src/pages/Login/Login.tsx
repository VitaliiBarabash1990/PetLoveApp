import LoginForm from "../../components/SignIn/LoginForm/LoginForm";
import LoginImage from "../../components/SignIn/LoginImage/LoginImage";
import s from "./Login.module.css";

const Login = () => {
	return (
		<section className={s.HomePageSection}>
			<div className={s.DesktopBox}>
				<LoginImage />
				<LoginForm />
			</div>
		</section>
	);
};

export default Login;
