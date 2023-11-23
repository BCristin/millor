import { Modal } from '../../../layout/Modal/Modal';
import { Input } from '../../Input/Input';

export const PopupLogin = ({ setIsOpen, setIsOpenSecondModal, setIsOpenLink }) => {
	return (
		<Modal
			setIsOpen={setIsOpen}
			leftTitle="Регистрация"
			leftText="Получайте скидки первым!"
			leftBtnText="Зарегистрироваться"
			rightBtnText="Войти"
			rightAText="Забыли пароль?"
			setIsOpenSecondModal={setIsOpenSecondModal}
			setIsOpenLink={setIsOpenLink}>
			<h3>Войти в личный кабинет</h3>
			<Input>Имя</Input>
			<Input type="password">Придумайте пароль</Input>
		</Modal>
	);
};
