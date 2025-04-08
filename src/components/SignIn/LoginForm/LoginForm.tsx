import { useState } from "react";
import s from "./LoginForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { schemaLogin } from "../../../schemas/schemas";
import { Link } from "react-router-dom";

const initialValues = {
	email: "",
	password: "",
};

const LoginForm = () => {
	const [showPasswordLogin, setShowPasswordLogin] = useState(false);

	const handleShowPasswordLogin = () => {
		setShowPasswordLogin((prev) => !prev);
	};

	const submitLogin = (dataForm: typeof initialValues) => {
		const { email, password } = dataForm;
	};

	return (
		<div className={s.FormContainer}>
			<div className={s.FormTitleBox}>
				<h1>Log in</h1>
				<p>Welcome! Please, enter your credentials to login to the platform:</p>
			</div>

			<Formik
				initialValues={initialValues}
				validationSchema={schemaLogin}
				onSubmit={submitLogin}
			>
				{({ errors, touched }) => (
					<Form className={s.StyledForm}>
						<label htmlFor="email">
							<Field
								className={s.StyledField}
								type="email"
								name="email"
								placeholder="Email"
								required
								aria-label="Input for typing your email"
								style={{
									borderColor:
										errors.email && touched.email
											? "red"
											: !errors.email && touched.email
											? "var(--success-color)"
											: "var(--link-gray)",
								}}
							/>
							{errors.email && touched.email && (
								<span className={s.IconCheck}>
									<svg width={18} height={18}>
										<use href={`/sprite.svg#icon-x-red`}></use>
									</svg>
								</span>
							)}
							{!errors.email && touched.email && (
								<span className={s.IconCheck}>
									<svg width={18} height={18}>
										<use href={`/sprite.svg#icon-check`}></use>
									</svg>
								</span>
							)}
							<ErrorMessage
								className={s.StyledErrorMessage}
								name="email"
								component="span"
							/>
						</label>
						<label htmlFor="password">
							<Field
								className={s.StyledField}
								type={showPasswordLogin ? "text" : "password"}
								name="password"
								placeholder="Password"
								required
								aria-label="Input for typing your password"
								style={{
									borderColor:
										errors.password && touched.password
											? "red"
											: !errors.password && touched.password
											? "var(--success-color)"
											: "var(--link-gray)",
								}}
							/>
							<button
								className={s.ShowPasswordBtn}
								type="button"
								onClick={handleShowPasswordLogin}
							>
								<svg width={18} height={18}>
									<use
										xlinkHref={
											showPasswordLogin
												? `/sprite.svg#icon-eye`
												: `/sprite.svg#icon-eye-off`
										}
									></use>
								</svg>
							</button>
							{errors.password && touched.password && (
								<span className={s.IconCheckPassword}>
									<svg width={18} height={18}>
										<use xlinkHref={`/sprite.svg#icon-x-red`}></use>
									</svg>
								</span>
							)}
							{!errors.password && touched.password && (
								<span className={s.IconCheckPassword}>
									<svg width={18} height={18}>
										<use xlinkHref={`/sprite.svg#icon-check`}></use>
									</svg>
								</span>
							)}
							<ErrorMessage
								className={s.StyledErrorMessage}
								name="password"
								component="span"
							/>
							{!errors.password && touched.password && (
								<p className={s.PasswordSecure}>Password is secure</p>
							)}
						</label>
						<button className={s.SubmitBtn} type="submit">
							log in
						</button>
						<p className={s.TextHaveAccount}>
							Don't have an account?<Link to="/register">Register</Link>
						</p>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default LoginForm;
