import { Modal } from '../../../layout/Modal/Modal';
import { Input } from '../../Input/Input';
import styles from '../PopupRegiste/PopupRegiste.module.scss';

export const PopupForgot = ({
	setIsOpen,
	setIsOpenSecondModal,
	setIsOpenLink,
	setIsOpenSucces,
}) => {
	return (
		<Modal
			setIsOpen={setIsOpen}
			leftTitle="Регистрация"
			leftText="Получайте скидки первым!"
			leftBtnText="Зарегистрироваться"
			rightBtnText="Получить код"
			rightAText="Вернуться на страницу входа"
			setIsOpenSecondModal={setIsOpenSecondModal}
			setIsOpenLink={setIsOpenLink}
			setIsOpenSucces={setIsOpenSucces}>
			<h3>Забыли пароль?</h3>
			<p className={styles.p}>Введите вашу почту и мы пришлем вам проверочный код на почту</p>
			<Input>Email</Input>
		</Modal>
	);
};
