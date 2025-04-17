import React from "react";
import { useMediaQuery } from "react-responsive";
import { Hearts } from "react-loader-spinner";

const LoaderMain = () => {
	const mobile = useMediaQuery({ maxWidth: 767.98 });

	const LoaderStyles = {
		position: "absolute",
		top: "30%",
		left: mobile ? "46%" : "50%",
		transform: "translate(-50%, -50%)",
	};

	return (
		<>
			<Hearts
				height="180"
				width="180"
				color="var(--accent-color)"
				ariaLabel="hearts-loading"
				wrapperStyle={LoaderStyles}
				wrapperClass=""
				visible={true}
			/>
		</>
	);
};

export default LoaderMain;
