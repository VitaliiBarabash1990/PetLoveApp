import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Pagination, PaginationItem, Stack } from "@mui/material";
import {
	NextIcon,
	PreviousIcon,
	LastIcon,
	FirstIcon,
} from "./CustomIcons/CustomIcons";
import s from "./Pagination.module.css";

const PaginationGeneral = ({ totalPages, setCurrentPage, currentPage }) => {
	const [localCurrentPage, setLocalCurrentPage] = useState(currentPage);
	const mobilesSmall = useMediaQuery({ maxWidth: 374.98 });
	const tablet = useMediaQuery({ minWidth: 768 });

	useEffect(() => {
		setLocalCurrentPage(currentPage);
	}, [currentPage]);

	const onPageChanged = (_, page) => {
		setCurrentPage(page);
		setLocalCurrentPage(page);
	};

	return (
		<>
			{totalPages > 1 && (
				<div className={s.PaginationContainer}>
					<Stack spacing={0}>
						<Pagination
							count={totalPages}
							page={localCurrentPage}
							onChange={onPageChanged}
							variant="outlined"
							boundaryCount={tablet ? 1 : 0}
							siblingCount={0}
							color="primary"
							renderItem={(item) => (
								<PaginationItem
									slots={{
										previous: PreviousIcon,
										next: NextIcon,
										last: LastIcon,
										first: FirstIcon,
									}}
									{...item}
									sx={{
										width: mobilesSmall ? "32px" : "40px",
										height: mobilesSmall ? "32px" : "40px",
										borderRadius: "50%",
										"&.Mui-selected": {
											backgroundColor: "var(--accent-color)",
											color: "var(--white-color)",
											borderColor: "var(--accent-color)",
										},
									}}
								/>
							)}
							showFirstButton
							showLastButton
						/>
					</Stack>
				</div>
			)}
		</>
	);
};

export default PaginationGeneral;
