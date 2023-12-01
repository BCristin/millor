import img from '../../assets/images/user/6VhPY27jdps.jpg';
import styles from './PersonalPromo.module.scss';

export const PersonalPromo = () => {
	return (
		<div className={styles.personal__promo}>
			<div className={'container'}>
				<div className={styles.inner}>
					<div className={styles.title}>Персональные акции</div>
					<div className={styles.cards}>
						<div className={styles.card} style={{ backgroundImage: `url(${img})` }}>
							<div className={styles.card__title}>Купи 3 пачки кофе и получи 4-ую в подарок!</div>
							<div className={styles.card__endpromo}>Срок акции: до 31.08.2021</div>
						</div>
						<div className={styles.card} style={{ backgroundImage: `url(${img})` }}>
							<div className={styles.card__title}>Купи 3 пачки кофе и получи 4-ую в подарок!</div>
							<div className={styles.card__endpromo}>Срок акции: до 31.08.2021</div>
						</div>
						<div className={styles.card} style={{ backgroundImage: `url(${img})` }}>
							<div className={styles.card__title}>Купи 3 пачки кофе и получи 4-ую в подарок!</div>
							<div className={styles.card__endpromo}>Срок акции: до 31.08.2021</div>
						</div>
						<div className={styles.card} style={{ backgroundImage: `url(${img})` }}>
							<div className={styles.card__title}>Купи 3 пачки кофе и получи 4-ую в подарок!</div>
							<div className={styles.card__endpromo}>Срок акции: до 31.08.2021</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
