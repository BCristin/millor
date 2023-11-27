import { CardReviews } from '../../components/CardReviews/CardReviews';
import styles from './Reviews.module.scss';

export const Reviews = () => {
	return (
		<div className={styles.reviews}>
			<div className={'container'}>
				<div className={styles.inner}>
					{' '}
					<div className={styles.title}>Отзывы</div>
					<CardReviews></CardReviews>
					<CardReviews></CardReviews>
					<CardReviews></CardReviews>
					{/* <CardReviews></CardReviews> */}
					{/*//! de rezolvat cu bg , de facut adaptiv, cand se adauga elemente sa se mareasca si el */}
					<button className={styles.button}>Показать еще</button>
				</div>
			</div>
		</div>
	);
};
