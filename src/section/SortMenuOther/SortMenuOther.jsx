import { SelectSort } from '../../components/SelectSort/SelectSort';
import styles from './SortMenuOther.module.scss';

export const SortMenuOther = ({ date }) => {
	const sizeCard = 100 / (date.length / 2);

	const style = !(sizeCard === 25)
		? {
				flexBasis: `calc(${sizeCard}% - 20px)`,
				flexDirection: 'row',
				textAlign: 'start',
		  }
		: null;
	return (
		<div className={'container'}>
			<div className={styles.cards}>
				{date.map((card, index) =>
					card.name ? (
						<div className={styles.card} key={index} style={style}>
							<img src={card.img} alt={card.name} />
							{card.name}
						</div>
					) : (
						<div className={styles.invisibleCard} key={index}>
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
