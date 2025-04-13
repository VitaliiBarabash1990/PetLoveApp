import React from "react";
import { useMediaQuery } from "react-responsive";
import { Hearts } from "react-loader-spinner";
import s from "./LoaderMain.module.css";

const LoaderMain = () => {
	const mobile = useMediaQuery({ maxWidth: 767.98 });

	return (
		<>
			<Hearts
				height="180"
				width="180"
				color="var(--accent-color)"
				ariaLabel="hearts-loading"
				wrapperStyle={
					mobile ? `${s.LoaderStyles}` : `${s.LoaderStyles} ${s.notMobile}`
				}
				wrapperClass=""
				visible={true}
			/>
		</>
	);
};

export default LoaderMain;
