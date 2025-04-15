import React from "react";
import Hero from "../../components/ForHomePage/Hero/Hero";
import HeroImage from "../../components/ForHomePage/HeroImage/HeroImage";
import s from "./HomePage.module.css";

const HomePage = () => {
	return (
		<section className={s.HomePageSection}>
			<Hero />
			<HeroImage />
		</section>
	);
};

export default HomePage;
