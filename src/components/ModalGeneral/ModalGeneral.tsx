import { ReactNode, MouseEvent, useRef } from "react";
import { createPortal } from "react-dom";
import s from "./ModalGeneral.module.css";

type ModalProps = {
	children: ReactNode;
	fn: (value: boolean) => void;
};

const ModalGeneral = ({ children, fn }: ModalProps) => {
	const modalRoot = document.getElementById("modal-root") as HTMLElement;
	const backdropRef = useRef<HTMLDivElement>(null);

	const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
		if (e.target === backdropRef.current) {
			fn(false);
		}
	};

	return (
		<>
			{modalRoot &&
				createPortal(
					<div
						className={s.Backdrop}
						ref={backdropRef}
						onClick={handleBackdropClick}
					>
						<div className={s.ModalContainer}>
							<button
								className={s.CloseBtn}
								onClick={() => fn(false)}
								type="button"
							>
								<svg width={24} height={24}>
									<use href="sprite.svg#icon-close"></use>
								</svg>
							</button>
							{children}
						</div>
					</div>,
					modalRoot
				)}
		</>
	);
};

export default ModalGeneral;
