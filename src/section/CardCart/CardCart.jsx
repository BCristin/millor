import img from '../../assets/images/product/coffeProduct.png';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { InputNr } from '../../components/InputNr/InputNr';
import styles from './CardCart.module.scss';
export const CardCart = () => {
	return (
		<div className={styles.cart_cart}>
			<div className={'container'}>
				<Breadcrumbs className={styles.breadcrumbs} />
				<div className={styles.inner}>
					<div className={styles.top}>
						<div className={styles.title}>2 товара в корзине </div>
						<button className={styles.btn}>Удалить все</button>
					</div>
					<div className={styles.wrapper}>
						<ol className={styles.titles}>
							<li>Удалить товар</li>
							<li>Наименование товара</li>
							<li>Цена</li>
							<li>Количество</li>
							<li>Скидка (10%) </li>
							<li>Итого</li>
						</ol>
						<div className={styles.item}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="25"
								height="25"
								viewBox="0 0 25 25"
								fill="none">
								<path d="M2 2L23 23" strokeWidth="3" strokeLinecap="round" />
								<path d="M23 2L2 23" strokeWidth="3" strokeLinecap="round" />
							</svg>
							<div className={styles.product}>
								<div className={styles.img}>
									<img src={img} alt="" />
								</div>
								<div className={styles.product__inner}>
									<div className={styles.title}> Columbia Supremo</div>
									<div className={styles.desc}>Мытая, натуральная, смесь</div>
									<div className={styles.weight}>250 г.</div>
								</div>
							</div>
							<div className={styles.price}>270 ₽ </div>
							<InputNr type="small" />
							<div className={styles.discount}>27 ₽ </div>
							<div className={styles.total}>243 ₽ </div>
						</div>
						<div className={styles.item}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="25"
								height="25"
								viewBox="0 0 25 25"
								fill="none">
								<path d="M2 2L23 23" strokeWidth="3" strokeLinecap="round" />
								<path d="M23 2L2 23" strokeWidth="3" strokeLinecap="round" />
							</svg>
							<div className={styles.product}>
								<div className={styles.img}>
									<img src={img} alt="" />
								</div>
								<div className={styles.product__inner}>
									<div className={styles.title}> Columbia Supremo</div>
									<div className={styles.desc}>Мытая, натуральная, смесь</div>
									<div className={styles.weight}>250 г.</div>
								</div>
							</div>
							<div className={styles.price}>270 ₽ </div>
							<InputNr type="small" />
							<div className={styles.discount}>27 ₽ </div>
							<div className={styles.total}>243 ₽ </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
