import cn from 'classnames';
import logo from '../../assets/images/logo.png';
import decor from '../../assets/images/popup/decor.png';
import styles from './Modal.module.scss';

export const Modal = ({
	children,
	setIsOpen,
	setIsOpenSecondModal,
	leftTitle,
	leftText,
	leftBtnText,
	rightBtnText,
	rightAText,
	setIsOpenLink,
	setIsOpenSucces,
}) => {
	const handlerbtnRight = (e) => {
		e.preventDefault();
		if (setIsOpenSucces) setIsOpenSucces(true);
	};
	const handlerbtnLeft = (e) => {
		setIsOpen(false);
		setIsOpenSecondModal(true);
	};

	const handleLink = (e) => {
		setIsOpen(false);
		setIsOpenLink(true);
	};
	const handleClickOutside = (e) => {
		if (!e.target.closest('.' + styles.modal)) setIsOpen(false);
	};
	return (
		<div className={cn(styles.inner)} onClick={handleClickOutside}>
			<div className={styles.modal}>
				<div className={styles.modal__left}>
					<img src={decor} alt="" />
					<h4>{leftTitle}</h4>
					<p>{leftText}</p>
					<button onClick={handlerbtnLeft}>{leftBtnText}</button>
				</div>
				<form className={styles.modal__right}>
					<img src={logo} alt="" />
					{children}
					<button type="submit" onClick={handlerbtnRight}>
						{rightBtnText}
					</button>
					<a href="#!" onClick={handleLink}>
						{rightAText}
					</a>
				</form>
				<svg
					onClick={() => setIsOpen(false)}
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="29"
					viewBox="0 0 30 29"
					fill="none">
					<path d="M2 2L27.3333 27.425" stroke="black" strokeWidth="3" />
					<path d="M28 2L2.66667 27.425" stroke="black" strokeWidth="3" />
				</svg>
			</div>
		</div>
	);
};
