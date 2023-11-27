import styles from './CatalogCards.module.scss';

export const CatalogCards = ({ children }) => {
	return (
		<div className={styles.catalogCards}>
			<div className={'container'}>
				<div className={styles.cards}>{children}</div>
				<button className={styles.button}>Показать еще</button>
			</div>
		</div>
	);
};
