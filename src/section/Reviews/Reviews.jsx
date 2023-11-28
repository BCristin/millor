import { CardReviews } from '../../components/CardReviews/CardReviews';
import styles from './Reviews.module.scss';

export const Reviews = () => {
	return (
		<div className={styles.reviews} id="reviews">
			<div className={'container'}>
				<div className={styles.inner}>
					<div className={styles.title}>Отзывы</div>
					<CardReviews></CardReviews>
					<CardReviews></CardReviews>
					<CardReviews></CardReviews>
					<CardReviews></CardReviews>
					<CardReviews></CardReviews>
					<CardReviews></CardReviews>

					<button className={styles.button}>Показать еще</button>
				</div>
			</div>
		</div>
	);
};
