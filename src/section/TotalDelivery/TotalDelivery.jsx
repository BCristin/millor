import mastercard from '../../assets/images/cart/mastercard.png';
import visa from '../../assets/images/cart/visa.png';
import { Promocode } from '../../components/Promocode/Promocode';
import { SortList } from '../../components/SortList/SortList';
import styles from './TotalDelivery.module.scss';

export const TotalDelivery = () => {
	return (
		<div className={styles.total_delivery}>
			<div className={'container'}>
				<div className={styles.inner}>
					<Promocode />
					<div className={styles.total}>
						<div className={styles.top}>
							<div className={styles.total_final}>Итог: 486 ₽</div>
							<div className={styles.visa_mastercard}>
								<img src={mastercard} alt="mastercard" />
								<img src={visa} alt="visa" />
							</div>
						</div>
						<div className={styles.subtotal}>Подытог: 540 ₽</div>
						<div className={styles.discount}>Скидка: 54 ₽ (10%)</div>
						<div className={styles.ship}>
							Доставка:
							<div className={styles.ship__option}>
								<SortList
									defaultSelect="1"
									option={[
										<>
											СДЭК - до двери <span>390 ₽</span>
										</>,
										<>
											Почта России<span> 300 ₽</span>
										</>,
										<>
											DPD - курьер, 3 дн <span>427 ₽</span>
										</>,
									]}></SortList>
							</div>
						</div>
						<button className={styles.btn}>Оплатить заказ</button>
						<div className={styles.p}>
							Ваши персональные данные будут использоваться для управления доступом к вашей учетной
							записи и для других целей, описанных в нашем документе политика конфиденциальности.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
