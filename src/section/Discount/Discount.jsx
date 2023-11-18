import { CardDiscound } from '../../components/CardDiscound/CardDiscound';
import { Title } from '../../components/Title/Title';
import styles from './Discount.module.scss';

export const Discount = () => {
	return (
		<div className={styles.discount}>
			<Title>Товары со скидкой</Title>
			<p className={styles.text}>
				Наша компания предлагает покупать товар со скидкой не только в дни распродаж или в течение
				действия ограниченных предложений, но и пользоваться скидками постоянно!
			</p>
			<div className={styles.cards}>
				<CardDiscound></CardDiscound>
			</div>
		</div>
	);
};
