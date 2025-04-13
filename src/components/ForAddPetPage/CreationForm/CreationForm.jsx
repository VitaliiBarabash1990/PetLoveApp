import { Link, useNavigate } from "react-router-dom";
import s from "./CreationForm.module.css";
import { useEffect, useState } from "react";
import { addPetSchema } from "../../../schemas/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import SexButtons from "./SexButtons/SexButtons";
import PetAvatar from "./PetAvatar/PetAvatar";
import BirthdayInput from "./BirthdayInput/BirthdayInput";
import TypeAnimal from "./TypeAnimal/TypeAnimal";

const CreationForm = () => {
	const navigate = useNavigate();
	const preset_key = import.meta.env.VITE_PRESET_KEY;
	const cloudURL = import.meta.env.VITE_CLOUDINARY_URL;
	const [sexPet, setSexPet] = useState("unknown");
	const [petType, setPetType] = useState(null);
	const [birthDate, setBirthDate] = useState(null);
	const [petImageURL, setPetImageURL] = useState("");
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({ resolver: yupResolver(addPetSchema) });

	const onSubmit = (data) => {
		console.log(data);
		navigate("/profile");
	};

	useEffect(() => {
		if (sexPet !== "unknown") {
			setValue("sex", sexPet);
		}

		if (petType) {
			setValue("species", petType ?? "");
		}

		if (birthDate) {
			setValue("birthday", birthDate ?? "");
		}
	}, [birthDate, petType, setValue, sexPet]);

	const handleUploadAvatar = (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		const formData = new FormData();
		formData.append("file", file);
		if (preset_key) {
			formData.append("upload_preset", preset_key);
		}
		if (!cloudURL) {
			console.error("Cloud URL is not defined");
			return;
		}
		fetch(cloudURL, { method: "POST", body: formData })
			.then((res) => {
				if (!res.ok) {
					throw new Error("Upload failed");
				}
				return res.json();
			})
			.then((data) => setValue("imgURL", data.secure_url))
			.catch((error) => console.log("Upload error:", error.message));
		const fileURL = URL.createObjectURL(file);
		setPetImageURL(fileURL);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<SexButtons setSexPet={setSexPet} sexPet={sexPet} />
			<input type="text" {...register("sex")} className={s.InvisibleInput} />
			<p className={s.ErrorMsg}>{errors.sex?.message}</p>
			<PetAvatar petImageURL={petImageURL} />
			<div className={s.UploadContainer}>
				<label>
					<input
						type="text"
						{...register("imgURL")}
						placeholder="Enter URL"
						className={s.InputPetImage}
					/>
					<p className={s.ErrorMsg}>{errors.imgURL?.message}</p>
				</label>
				<label className={s.Label}>
					<input
						type="file"
						name="avatarFile"
						onChange={handleUploadAvatar}
						className={s.AddAvatarInput}
					/>
					<svg width={18} height={18}>
						<use href="/sprite.svg#icon-upload-cloud"></use>
					</svg>
				</label>
			</div>
			<div className={s.InputBox}>
				<input
					type="text"
					{...register("title")}
					placeholder="Title"
					className={s.InputNormal}
				/>
				<p className={s.ErrorMsg}>{errors.title?.message}</p>
			</div>
			<div className={s.InputBox}>
				<input
					type="text"
					{...register("name")}
					placeholder="Pet's Name"
					className={s.InputNormal}
				/>
				<p className={s.ErrorMsg}>{errors.name?.message}</p>
			</div>
			<div className={s.BoxContainer}>
				<div>
					<BirthdayInput setBirthDate={setBirthDate} />
					<p className={s.ErrorMsg}>{errors.birthday?.message}</p>
					<input
						type="text"
						{...register("birthday")}
						className={s.InvisibleInput}
					/>
				</div>
				<div>
					<TypeAnimal petType={petType} setPetType={setPetType} />
					<p className={s.ErrorMsg}>{errors.species?.message}</p>
					<input
						type="text"
						{...register("species")}
						className={s.InvisibleInput}
					/>
				</div>
			</div>
			<div className={s.ButtonsBox}>
				<Link to={"/profile"} className={s.BackBtn}>
					Back
				</Link>
				<button type="submit" className={s.SubmitBtn}>
					Submit
				</button>
			</div>
		</form>
	);
};

export default CreationForm;
