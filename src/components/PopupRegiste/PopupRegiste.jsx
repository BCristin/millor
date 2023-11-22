import classNames from 'classnames';
import logo from '../../assets/images/logo.png';
import decor from '../../assets/images/popup/decor.png';
import { Input } from '../../components/Input/Input';
import styles from './PopupRegiste.module.scss';
export const PopupRegiste = ({ setIsOpen, className }) => {
	const handler = (e) => {
		e.preventDefault();
	};

	const handleClickOutside = (e) => {
		if (!e.target.closest('.' + styles.register)) setIsOpen(false);
	};
	return (
		<div className={classNames(styles.inner, className)} onClick={handleClickOutside}>
			<div className={styles.register}>
				<div className={styles.register__left}>
					<img src={decor} alt="" />
					<h4>Добро пожаловать!</h4>
					<p>Уже есть аккаунт?</p>
					<button>Войти</button>
				</div>
				<form className={styles.register__right}>
					<img src={logo} alt="" />
					<h3>Регистрация</h3>
					<p className={styles.p}>
						Зарегистрируйтесь на сайте, чтобы первым получать скидки и узнавать акционные
						предложения!
					</p>
					<Input>Имя и фамилия</Input>
					<Input>Email</Input>
					<Input>Телефон</Input>
					<Input type="password">Придумайте пароль</Input>
					<button type="submit" onClick={handler}>
						Зарегистрироваться
					</button>
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
