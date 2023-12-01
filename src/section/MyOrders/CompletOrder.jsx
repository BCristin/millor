import styles from './MyOrders.module.scss';

export const CompletOrder = () => {
	return (
		<div className={styles.orders}>
			<div className={styles.order}>
				<div className={styles.top}>
					<div className={styles.date}>01.08.2021 12:24:00 - доставлено</div>
					<div className={styles.date__ship}>Доставлено: 03.08.2021</div>
				</div>
				<div className={styles.order__card}>
					<div className={styles.titles}>
						<div>Товаров:</div>
						<div>Сумма заказа:</div>
						<div>Скидка (10%):</div>
						<div>Сумма заказа:</div>
					</div>
					<ul className={styles.list__items}>
						<li className={styles.item}>
							<div>2 х Columbia Supremo, 250 г.</div>
							<div>480 ₽</div>
							<div>48 ₽ </div>
							<div>432 ₽ </div>
						</li>
						<li className={styles.item}>
							<div>1 х Напиток ячменый Millor, 250 г.</div>
							<div>480 ₽</div>
							<div>48 ₽ </div>
							<div>432 ₽ </div>
						</li>
					</ul>
				</div>
				<div className={styles.total}>Сумма заказа: 864 ₽</div>
				<div className={styles.delivery}>Доставка: 350 ₽ </div>
			</div>
			<div className={styles.order}>
				<div className={styles.top}>
					<div className={styles.date}>01.08.2021 12:24:00 - доставлено</div>
					<div className={styles.date__ship}>Доставлено: 03.08.2021</div>
				</div>
				<div className={styles.order__card}>
					<div className={styles.titles}>
						<div>Товаров:</div>
						<div>Сумма заказа:</div>
						<div>Скидка (10%):</div>
						<div>Сумма заказа:</div>
					</div>
					<ul className={styles.list__items}>
						<li className={styles.item}>
							<div>2 х Columbia Supremo, 250 г.</div>
							<div>480 ₽</div>
							<div>48 ₽ </div>
							<div>432 ₽ </div>
						</li>
						<li className={styles.item}>
							<div>1 х Напиток ячменый Millor, 250 г.</div>
							<div>480 ₽</div>
							<div>48 ₽ </div>
							<div>432 ₽ </div>
						</li>
					</ul>
				</div>
				<div className={styles.total}>Сумма заказа: 864 ₽</div>
				<div className={styles.delivery}>Доставка: 350 ₽ </div>
			</div>
		</div>
	);
};
