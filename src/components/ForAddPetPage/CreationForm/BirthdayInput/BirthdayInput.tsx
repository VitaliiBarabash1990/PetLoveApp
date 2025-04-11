import { useMediaQuery } from "react-responsive";
import IconCalendar from "./IconCalendar";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";

type BirthdayInputProps = {
	setBirthDate: (date: string) => void;
};

export default function BirthdayInput({ setBirthDate }: BirthdayInputProps) {
	const tablet = useMediaQuery({ minWidth: 768 });

	const handleDatePicker = (newValue: Dayjs | null) => {
		if (!newValue) return;
		const year = newValue.year;
		const month = String(+newValue.month + 1).padStart(2, "0");
		const day = String(newValue.date).padStart(2, "0");
		const formattedDate = `${year}-${month}-${day}`;
		setBirthDate(formattedDate);
	};

	return (
		<>
			<DatePicker
				format="DD.MM.YYYY"
				onChange={handleDatePicker}
				slotProps={{
					textField: {
						size: "small",
						sx: {
							".MuiInputBase-root.Mui-focused": {
								border: "1px solid var(--accent-color)",
							},
							".MuiInputBase-root": {
								width: tablet ? "210px" : "144px",
								height: tablet ? "52px" : "40px",
								fontSize: tablet ? "16px" : "14px",
								lineHeight: tablet ? "1.25" : "1.29",
								letterSpacing: "-0.03em",
								fontWeight: "500",
								transition: "var(--hover-general)",
								borderRadius: "30px",
								outline: "none",
								border: "1px solid var(--link-gray)",
								"&:hover": {
									border: "1px solid var(--accent-color)",
									outline: "none",
								},
							},
						},
					},
					popper: {
						sx: {
							".MuiPaper-root": { border: "1px solid var(--accent-color)" },
						},
					},
				}}
				views={["day", "month", "year"]}
				slots={{
					openPickerIcon: IconCalendar,
				}}
			/>
		</>
	);
}
