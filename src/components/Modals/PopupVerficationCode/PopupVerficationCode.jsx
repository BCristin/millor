import { Modal } from '../../../layout/Modal/Modal';
import { Input } from '../../Input/Input';
import styles from '../PopupRegiste/PopupRegiste.module.scss';

export const PopupVerficationCode = ({
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
			rightBtnText="Обновить пароль"
			rightAText="Отправить код повторно"
			setIsOpenSecondModal={setIsOpenSecondModal}
			setIsOpenLink={setIsOpenLink}
			setIsOpenSucces={setIsOpenSucces}>
			<h3>Забыли пароль?</h3>
			<p className={styles.p}>
				Мы выслали вам на почту проверочный код. Введите его и ниже и придумайте новый пароль
			</p>
			<Input>Введите код</Input>
			<Input type="password">Введите новый пароль</Input>
		</Modal>
	);
};
