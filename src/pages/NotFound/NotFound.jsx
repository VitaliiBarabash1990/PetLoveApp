import { Link } from "react-router-dom";
import Cat404 from "../../components/NotFound/Cat404/Cat404";
import s from "./NotFound.module.css";

const NotFound = () => {
	return (
		<section className={s.HomePageSection}>
			<div className={s.container}>
				<Cat404 />
				<p className={s.Text404}>Ooops! This page not found :(</p>
				<div className={s.LinkBox}>
					<Link className={s.StyledLink} to={"/home"}>
						To home page
					</Link>
				</div>
			</div>
		</section>
	);
};

export default NotFound;
