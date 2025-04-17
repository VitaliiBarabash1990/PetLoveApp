import React from "react";
import { workHours } from "../../../functions/workHours";
import s from "./FriendItem.module.css";
import { Link } from "react-router-dom";

const FriendItem = ({ friend }) => {
	const { address, addressUrl, email, imageUrl, phone, title, url, workDays } =
		friend;
	const workingHours = workHours(workDays);

	return (
		<li className={s.CardContainer}>
			<Link to={url} className={s.LogoCompany} target="_blank">
				<img src={imageUrl} alt={`Logo of ${title}`} />
			</Link>
			<div className={s.InfoCompany}>
				<h2>{title}</h2>
				<ul className={s.ListDetails}>
					<li>
						<p>Email: </p>
						<Link to={email ? `mailto:${email}` : "#"} className={s.InfoLink}>
							{email || "website only"}
						</Link>
					</li>
					<li>
						<p>Address: </p>
						<Link
							to={addressUrl ? `${addressUrl}` : "#"}
							className={s.InfoLink}
						>
							{address || "website only"}
						</Link>
					</li>
					<li>
						<p>Phone: </p>
						<Link to={phone ? `tel:${phone}` : "#"} className={s.InfoLink}>
							{phone || "website only"}
						</Link>
					</li>
				</ul>
			</div>
			<span>{workingHours || "Day and night"}</span>
		</li>
	);
};

export default FriendItem;
