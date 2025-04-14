// @ts-nocheck
import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../../schemas/schemas";
import { editUser } from "../../../../redux/auth/operations";
import { useAuth } from "../../../../hooks/useAuth";

const FormEditUser = ({ setImageURL, setShowEditForm }) => {
	const dispatch = useDispatch();
	const { user } = useAuth();
	const preset_key = import.meta.env.VITE_PRESET_KEY;
	const cloudURL = import.meta.env.VITE_CLOUDINARY_URL;
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		dispatch(editUser(data));
		setShowEditForm(false);
	};

	const handleUploadAvatar = (e) => {
		const file = e.target.files[0];
		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", preset_key);
		fetch(cloudURL, { method: "POST", body: formData })
			.then((res) => {
				if (!res.ok) {
					throw new Error("Upload failed");
				}
				return res.json();
			})
			.then((data) => setValue("avatar", data.secure_url))
			.catch((error) => console.log("Upload error:", error.message));
		const fileURL = URL.createObjectURL(file);
		setImageURL(fileURL);
	};

	return (
		<form className={s.FormContainer} onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label>
					<input
						className={s.InputAvatarURL}
						type="text"
						{...register("avatar")}
						defaultValue={user?.avatar || "Avatar URL"}
					/>
					<p className={s.ErrorMsg}>{errors.avatar?.message}</p>
				</label>
				<label className={s.Label}>
					<input
						className={s.AddAvatarInput}
						type="file"
						name="avatarFile"
						onChange={handleUploadAvatar}
					/>
					<svg width={18} height={18}>
						<use href="/sprite#icon-upload-cloud"></use>
					</svg>
				</label>
			</div>
			<input
				className={s.InputStandart}
				type="text"
				{...register("name")}
				defaultValue={user.name}
			/>
			<p className={s.ErrorMsg}>{errors.name?.message}</p>
			<input
				className={s.InputStandart}
				type="email"
				{...register("email")}
				defaultValue={user.email}
			/>
			<p className={s.ErrorMsg}>{errors.email?.message}</p>
			<input
				className={s.InputStandart}
				type="tel"
				{...register("phone")}
				defaultValue={user?.phone || "+380"}
			/>
			<p className={s.ErrorMsg}>{errors.phone?.message}</p>
			<button className={s.SubmitBtn} type="submit">
				Save
			</button>
		</form>
	);
};

export default FormEditUser;
