import { useState } from "react";
import s from "./RegistrationForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { schemaRegister } from "../../../schemas/schemas";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../../redux/auth/operations.js";

const initialValues = {
	name: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const RegistrationForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const dispatch = useDispatch();

	const handleShowPassword = () => setShowPassword((prev) => !prev);
	const handleShowConfirmPassword = () =>
		setShowConfirmPassword((prev) => !prev);

	const submitRegistration = (dataForm) => {
		const { name, email, password } = dataForm;
		dispatch(register({ name, email, password }));
	};

	return (
		<div className={s.FormContainer}>
			<div className={s.FormTitleBox}>
				<h1>Registration</h1>
				<p>Thank you for your interest in our platform.</p>
			</div>

			<Formik
				initialValues={initialValues}
				validationSchema={schemaRegister}
				onSubmit={submitRegistration}
			>
				{({ errors, touched }) => (
					<Form className={s.StyledForm}>
						<label htmlFor="name">
							<Field
								className={s.StyledField}
								type="text"
								name="name"
								placeholder="Name"
								required
								aria-label="Input for typing your name"
								style={{
									borderColor:
										errors.name && touched.name
											? "red"
											: !errors.name && touched.name
											? "var(--success-color)"
											: "var(--link-gray)",
								}}
							/>
							{errors.name && touched.name && (
								<span className={s.IconCheck}>
									<svg width={18} height={18}>
										<use href="/sprite.svg#icon-x-red"></use>
									</svg>
								</span>
							)}
							{!errors.name && touched.name && (
								<span className={s.IconCheck}>
									<svg width={18} height={18}>
										<use href="/sprite.svg#icon-check"></use>
									</svg>
								</span>
							)}

							<ErrorMessage
								className={s.StyledErrorMessage}
								name="name"
								component="span"
							/>
						</label>

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
									<svg>
										<use href="/sprite.svg#icon-x-red"></use>
									</svg>
								</span>
							)}
							{!errors.email && touched.email && (
								<span className={s.IconCheck}>
									<svg>
										<use href="/sprite.svg#icon-check"></use>
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
								type={showPassword ? "text" : "password"}
								name="password"
								placeholder="Password"
								required
								autoComplete="new-password"
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
								onClick={handleShowPassword}
							>
								<svg>
									<use
										href={
											showPassword
												? "/sprite.svg#icon-eye"
												: "/sprite.svg#icon-eye-off"
										}
									></use>
								</svg>
							</button>
							{errors.password && touched.password && (
								<span className={s.IconCheckPassword}>
									<svg>
										<use href="/sprite.svg#icon-x-red"></use>
									</svg>
								</span>
							)}
							{!errors.password && touched.password && (
								<span className={s.IconCheckPassword}>
									<svg>
										<use href="/sprite.svg#icon-check"></use>
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

						<label htmlFor="confirmPassword">
							<Field
								className={s.StyledField}
								type={showConfirmPassword ? "text" : "password"}
								name="confirmPassword"
								placeholder="Confirm password"
								required
								aria-label="Input for confirm your password"
								style={{
									borderColor:
										errors.confirmPassword && touched.confirmPassword
											? "red"
											: !errors.confirmPassword && touched.confirmPassword
											? "var(--success-color)"
											: "var(--link-gray)",
								}}
							/>
							<button
								className={s.ShowPasswordBtn}
								type="button"
								onClick={handleShowConfirmPassword}
							>
								<svg>
									<use
										href={
											showConfirmPassword
												? "/sprite.svg#icon-eye"
												: "/sprite.svg#icon-eye-off"
										}
									></use>
								</svg>
							</button>
							{errors.confirmPassword && touched.confirmPassword && (
								<span className={s.IconCheckPassword}>
									<svg>
										<use href="/sprite.svg#icon-x-red"></use>
									</svg>
								</span>
							)}
							{!errors.confirmPassword && touched.confirmPassword && (
								<span className={s.IconCheckPassword}>
									<svg>
										<use href="/sprite.svg#icon-check"></use>
									</svg>
								</span>
							)}
							<ErrorMessage
								className={s.StyledErrorMessage}
								name="confirmPassword"
								component="span"
							/>
						</label>
						<button className={s.SubmitBtn} type="submit">
							Registration
						</button>
						<p className={s.TextHaveAccount}>
							Already have an account?<Link to="/login">Login</Link>
						</p>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default RegistrationForm;
