import { Input } from '../../components/Input/Input';

import styles from './Delivery.module.scss';
export const Delivery = () => {
	return (
		<div className={styles.delivery}>
			<div className={'container'}>
				<div className={styles.inner}>
					<div className={styles.title}>Доставка</div>
					<form action="" className={styles.form}>
						<Input>Имя</Input>
						<Input>Страна</Input>
						<Input>Фамилия</Input>
						<Input>Город</Input>
						<Input>Телефон</Input>
						<Input>Улица, дом</Input>
						<Input>Email</Input>
						<Input>Почтовый индекс</Input>
						<Input>Название компании (необязательно)</Input>
						<Input>Комментарий к заказу (необязательно)</Input>
						<button type="submit">Рассчитать доставку</button>
					</form>
				</div>
			</div>
		</div>
	);
};
