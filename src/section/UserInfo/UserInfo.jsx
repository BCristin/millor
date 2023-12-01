import { useState } from 'react';
import img from '../../assets/images/user/user.jpg';
import styles from './UserInfo.module.scss';
export const UserInfo = () => {
	const [editMode, setEditMode] = useState(false);
	const [visiblePasswoed, setVisiblePasswoed] = useState(false);
	const [mail, setMail] = useState('ivan.ivanov@gmail.com');
	const [tel, setTel] = useState('+ 7 (909) 909 99 99');
	const [password, setPassword] = useState('');
	const handler = () => {
		setEditMode(!editMode);
	};

	return (
		<div className={styles.user}>
			<div className={'container'}>
				<div className={styles.info}>
					<div className={styles.user__photo}>
						<div className={styles.img}>
							<img src={img} alt="" />
							{editMode && (
								<div className={styles.blur}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="35"
										height="35"
										viewBox="0 0 35 35"
										fill="none">
										<path
											d="M33 33L25.5083 25.5083M29.5556 15.7778C29.5556 23.387 23.387 29.5556 15.7778 29.5556C8.16852 29.5556 2 23.387 2 15.7778C2 8.16852 8.16852 2 15.7778 2C23.387 2 29.5556 8.16852 29.5556 15.7778Z"
											stroke="white"
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
							)}
						</div>
						<button onClick={handler}>{editMode ? 'Сохранить' : 'Изменить'}</button>
					</div>
					<form className={styles.wrapper}>
						<div className={styles.hello}>Иван Иванов, здравствуйте!</div>
						{/* <div className={styles.mail}>ivan.ivanov@gmail.com</div> */}
						<input
							disabled={!editMode}
							type="email"
							className={styles.mail}
							value={mail}
							onChange={(e) => setMail(e.target.value)}
						/>
						<input
							disabled={!editMode}
							type="tel"
							className={styles.tel}
							value={tel}
							onChange={(e) => setTel(e.target.value)}
						/>

						<div className={styles.password}>
							Пароль:
							<input
								disabled={!editMode}
								type={visiblePasswoed ? 'text' : 'password'}
								value={password}
								placeholder="**********"
								autoComplete="off"
								onChange={(e) => setPassword(e.target.value)}
							/>
							{editMode && (
								<svg
									onClick={() => setVisiblePasswoed(!visiblePasswoed)}
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="14"
									viewBox="0 0 18 14"
									fill="none">
									<path
										d="M1 7C1 7 3.90909 1 9 1C14.0909 1 17 7 17 7C17 7 14.0909 13 9 13C3.90909 13 1 7 1 7Z"
										stroke="black"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M9 9.25C10.205 9.25 11.1818 8.24264 11.1818 7C11.1818 5.75736 10.205 4.75 9 4.75C7.79502 4.75 6.81818 5.75736 6.81818 7C6.81818 8.24264 7.79502 9.25 9 9.25Z"
										stroke="black"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							)}
						</div>
					</form>
					<div className={styles.discount}>
						<div className={styles.title}>Ваша скидка: 10%</div>
						<div className={styles.second_title}>
							Сумма заказов: <span>5675 ₽*</span>
						</div>
						<div className={styles.up_discount}>
							*До скидки 15% не хватает покупок на сумму: 1255 ₽
						</div>
						<div className={styles.information}>?</div>
						<div className={styles.suplimentar__info}>
							<div className={styles.suplimentar__info__title}>
								До скидки 15% не хватает покупок на сумму: 1255 ₽
							</div>
							<p> Скидка 10% - сумма покупок 5000 ₽ </p>
							<p> Скидка 15% - сумма покупок 7000 ₽ </p>
							<p> Скидка 20% - сумма покупок 10000 ₽ </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
