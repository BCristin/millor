import { SelectSort } from '../../components/SelectSort/SelectSort';
import styles from './SortMenuOther.module.scss';

export const SortMenuOther = ({ date }) => {
	return (
		<div className={'container'}>
			<div className={styles.cards}>
				{date.map((card) =>
					card.name ? (
						<div className={styles.card}>
							<img src={card.img} alt={card.name} />
							{card.name}
						</div>
					) : (
						<div className={styles.invisibleCard}>
							<div className={styles.decor}>
								<img src={card.img} alt="decor" />
							</div>
						</div>
					),
				)}
			</div>
			<SelectSort className={styles.sortSelect}></SelectSort>
		</div>
	);
};
