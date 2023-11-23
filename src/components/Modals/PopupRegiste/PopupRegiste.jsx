import { Modal } from '../../../layout/Modal/Modal';
import { Input } from '../../Input/Input';
import styles from './PopupRegiste.module.scss';

export const PopupRegiste = ({ setIsOpen, setIsOpenSecondModal }) => {
	return (
		<Modal
			setIsOpen={setIsOpen}
			leftTitle="Добро пожаловать!"
			leftText="Уже есть аккаунт?"
			leftBtnText="Войти"
			rightBtnText="Зарегистрироваться"
			setIsOpenSecondModal={setIsOpenSecondModal}>
			<h3>Регистрация</h3>
			<p className={styles.p}>
				Зарегистрируйтесь на сайте, чтобы первым получать скидки и узнавать акционные предложения!
			</p>
			<Input>Имя и фамилия</Input>
			<Input>Email</Input>
			<Input>Телефон</Input>
			<Input type="password">Введите пароль</Input>
		</Modal>
	);
};
