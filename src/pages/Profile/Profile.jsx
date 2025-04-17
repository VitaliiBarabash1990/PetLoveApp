import React, { useState, Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import EditProfileModal from "../../components/ForProfilePage/EditProfileModal/EditProfileModal";
import UserAndEditBtns from "../../components/ForProfilePage/UserAndEditBtns/UserAndEditBtns";
import UserInformation from "../../components/ForProfilePage/UserInformation";
import LinksCollections from "../../components/ForProfilePage/LinksCollections/LinksCollections";
import s from "./Profile.module.css";

const Profile = () => {
	const [showEditForm, setShowEditForm] = useState(false);
	console.log("showEditForm", showEditForm);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(refreshUser());
	}, []);

	return (
		<>
			{showEditForm && (
				<EditProfileModal
					setShowEditForm={setShowEditForm}
					showEditForm={showEditForm}
				/>
			)}
			<section className={s.HomePageSection}>
				<div className={s.DesktopBox}>
					<div className={s.Container}>
						<UserAndEditBtns setShowEditForm={setShowEditForm} />
						<UserInformation setShowEditForm={setShowEditForm} />
					</div>
					<div>
						<LinksCollections />
						<Suspense
							fallback={
								<div className={s.SubLoader}>
									<p>Loading...</p>
								</div>
							}
						>
							<Outlet />
						</Suspense>
					</div>
				</div>
			</section>
		</>
	);
};

export default Profile;
