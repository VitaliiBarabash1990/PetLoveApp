import React from "react";
import s from "./NoCollectionText.module.css";

const NoCollectionText = () => {
	return (
		<p className={s.Text}>
			Oops, <b>looks like there aren't any furries</b> on our adorable page yet.
			Do not worry! View your pets on the "find your favorite pet" page and add
			them to your favorites.
		</p>
	);
};

export default NoCollectionText;
