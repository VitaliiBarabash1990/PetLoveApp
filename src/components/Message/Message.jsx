import s from "./Message.module.css";

const Message = ({ imgUrl, name, birthday, comment }) => {
	return (
		<div className={s.MessageContainer}>
			<div className={s.ImgBox}>
				<img
					src={imgUrl}
					alt="Decoration avatar of message"
					width={32}
					height={32}
				/>
			</div>
			<div className={s.ContentBox}>
				<div className={s.NameBirthdayBox}>
					<p>{name}</p>
					<p>
						Birthday: <span>{birthday}</span>
					</p>
				</div>
				<p>{comment}</p>
			</div>
		</div>
	);
};

export default Message;
