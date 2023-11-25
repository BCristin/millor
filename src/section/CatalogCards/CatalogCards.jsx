import { CardDiscound } from '../../components/CardDiscound/CardDiscound';
import styles from './CatalogCards.module.scss';

export const CatalogCards = () => {
	return (
		<div className={styles.catalogCards}>
			<div className={'container'}>
				<div className={styles.cards}>
					<CardDiscound />
					<CardDiscound />
					<CardDiscound dicount={true} />
					<CardDiscound />
					<CardDiscound />
					<CardDiscound />
					<CardDiscound />
					<CardDiscound />
					<CardDiscound />
					<CardDiscound />
					<CardDiscound />
					<CardDiscound />
				</div>
				<button className={styles.button}>Показать еще</button>
			</div>
		</div>
	);
};
