import { Link } from 'react-router-dom';
import product from '../../assets/images/discount/product.png';
import { Button } from '../Button';
import { Select } from '../Select/Select';
import styles from './CardCoffe.module.scss';

export const CardCoffe = ({ dicount }) => {
	return (
		<div className={styles.inner}>
			<div className={styles.card}>
				<div className={styles.card__top}>
					<div className={styles.card__top_inner}>
						{dicount ? (
							<>
								<div className={styles.circle}>%</div>
								<div className={styles.discound}>Скидки</div>
							</>
						) : (
							<>
								<div className={styles.discound}>Популярное</div>
								<div className={styles.discound}>Новый урожай</div>
							</>
						)}
					</div>
					<Select></Select>
				</div>
				<Link to="/cereal/1">
					<div className={styles.stats}>
						<img src={product} alt="product item" />
						<div className={styles.detail}>
							<div className={styles.stars}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="133"
									height="25"
									viewBox="0 0 133 25"
									fill="none">
									<path
										d="M12.5 0L15.3064 8.63729H24.3882L17.0409 13.9754L19.8473 22.6127L12.5 17.2746L5.15268 22.6127L7.95911 13.9754L0.611794 8.63729H9.69357L12.5 0Z"
										fill="#F9B300"
									/>
									<path
										d="M39.5 0L42.3064 8.63729H51.3882L44.0409 13.9754L46.8473 22.6127L39.5 17.2746L32.1527 22.6127L34.9591 13.9754L27.6118 8.63729H36.6936L39.5 0Z"
										fill="#F9B300"
									/>
									<path
										d="M66.5 0L69.3064 8.63729H78.3882L71.0409 13.9754L73.8473 22.6127L66.5 17.2746L59.1527 22.6127L61.9591 13.9754L54.6118 8.63729H63.6936L66.5 0Z"
										fill="#F9B300"
									/>
									<path
										d="M93.5 0L96.3064 8.63729H105.388L98.0409 13.9754L100.847 22.6127L93.5 17.2746L86.1527 22.6127L88.9591 13.9754L81.6118 8.63729H90.6936L93.5 0Z"
										fill="#F9B300"
									/>
									<path
										d="M120.5 0L123.306 8.63729H132.388L125.041 13.9754L127.847 22.6127L120.5 17.2746L113.153 22.6127L115.959 13.9754L108.612 8.63729H117.694L120.5 0Z"
										fill="#F0F0F0"
									/>
								</svg>
							</div>
							<div className={styles.reviews}>
								4.0 <span> (32 отзыва)</span>
							</div>
							<div className={styles.beans}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="127"
									height="19"
									viewBox="0 0 127 19"
									fill="none">
									<path
										d="M0.831238 16.0602C-0.998416 12.8429 0.246618 7.79684 4.03168 4.02143C8.33002 -0.264162 14.2734 -1.28587 17.3079 1.73945C17.3114 1.74341 17.3144 1.7479 17.3193 1.75192C16.712 3.51381 14.778 7.26265 8.98091 9.28945C3.67048 11.1471 1.62197 14.1005 0.831238 16.0602ZM18.1614 2.84081C17.7014 3.91077 16.9009 5.30904 15.5215 6.68435C14.1351 8.06746 12.1645 9.42587 9.37332 10.4022C3.70834 12.3831 2.12554 15.6259 1.68391 17.1974C1.70478 17.2184 1.72272 17.2401 1.743 17.2605C4.77719 20.2859 10.7208 19.2643 15.0188 14.978C18.8433 11.1643 20.0732 6.05278 18.1614 2.84081Z"
										fill="#505050"
									/>
									<path
										d="M27.8187 16.0602C25.989 12.8429 27.234 7.79684 31.0191 4.02143C35.3174 -0.264162 41.2608 -1.28587 44.2953 1.73945C44.2989 1.74341 44.3018 1.7479 44.3067 1.75192C43.6994 3.51381 41.7654 7.26265 35.9683 9.28945C30.6579 11.1471 28.6094 14.1005 27.8187 16.0602ZM45.1488 2.84081C44.6888 3.91077 43.8883 5.30904 42.509 6.68435C41.1225 8.06746 39.1519 9.42587 36.3607 10.4022C30.6958 12.3831 29.113 15.6259 28.6713 17.1974C28.6922 17.2184 28.7101 17.2401 28.7304 17.2605C31.7646 20.2859 37.7082 19.2643 42.0063 14.978C45.8307 11.1643 47.0607 6.05278 45.1488 2.84081Z"
										fill="#505050"
									/>
									<path
										d="M54.8061 16.0602C52.9764 12.8429 54.2215 7.79684 58.0065 4.02143C62.3049 -0.264162 68.2482 -1.28587 71.2827 1.73945C71.2863 1.74341 71.2893 1.7479 71.2941 1.75192C70.6868 3.51381 68.7529 7.26265 62.9558 9.28945C57.6453 11.1471 55.5968 14.1005 54.8061 16.0602ZM72.1362 2.84081C71.6763 3.91077 70.8757 5.30904 69.4964 6.68435C68.1099 8.06746 66.1394 9.42587 63.3482 10.4022C57.6832 12.3831 56.1004 15.6259 55.6588 17.1974C55.6796 17.2184 55.6976 17.2401 55.7178 17.2605C58.752 20.2859 64.6957 19.2643 68.9937 14.978C72.8181 11.1643 74.0481 6.05278 72.1362 2.84081Z"
										fill="#505050"
									/>
									<path
										d="M81.7939 16.0602C79.9642 12.8429 81.2093 7.79684 84.9943 4.02143C89.2927 -0.264162 95.236 -1.28587 98.2705 1.73945C98.2741 1.74341 98.2771 1.7479 98.2819 1.75192C97.6746 3.51381 95.7407 7.26265 89.9436 9.28945C84.6331 11.1471 82.5846 14.1005 81.7939 16.0602ZM99.124 2.84081C98.664 3.91077 97.8635 5.30904 96.4842 6.68435C95.0977 8.06746 93.1272 9.42587 90.336 10.4022C84.671 12.3831 83.0882 15.6259 82.6466 17.1974C82.6674 17.2184 82.6854 17.2401 82.7056 17.2605C85.7398 20.2859 91.6834 19.2643 95.9815 14.978C99.8059 11.1643 101.036 6.05278 99.124 2.84081Z"
										fill="#505050"
									/>
									<path
										d="M108.781 16.0602C106.951 12.8429 108.196 7.79684 111.981 4.02143C116.28 -0.264162 122.223 -1.28587 125.258 1.73945C125.261 1.74341 125.264 1.7479 125.269 1.75192C124.662 3.51381 122.728 7.26265 116.931 9.28945C111.62 11.1471 109.572 14.1005 108.781 16.0602ZM126.111 2.84081C125.651 3.91077 124.851 5.30904 123.471 6.68435C122.085 8.06746 120.114 9.42587 117.323 10.4022C111.658 12.3831 110.075 15.6259 109.634 17.1974C109.654 17.2184 109.672 17.2401 109.693 17.2605C112.727 20.2859 118.671 19.2643 122.969 14.978C126.793 11.1643 128.023 6.05278 126.111 2.84081Z"
										fill="#505050"
									/>
								</svg>
							</div>
							<div className={styles.specs}>
								<div className={styles.specs__item}>
									<div className={styles.specs__title}>Кислинка</div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="127"
										height="10"
										viewBox="0 0 127 10"
										fill="none">
										<circle cx="5" cy="5" r="5" fill="#F9B300" />
										<circle cx="18" cy="5" r="5" fill="#F9B300" />
										<circle cx="31" cy="5" r="5" fill="#F9B300" />
										<circle cx="44" cy="5" r="5" fill="#F9B300" />
										<circle cx="57" cy="5" r="5" fill="#F9B300" />
										<circle cx="70" cy="5" r="5" fill="#F9B300" />
										<circle cx="83" cy="5" r="5" fill="#F9B300" />
										<circle cx="96" cy="5" r="5" fill="#F0F0F0" />
										<circle cx="109" cy="5" r="5" fill="#F0F0F0" />
										<circle cx="122" cy="5" r="5" fill="#F0F0F0" />
									</svg>
								</div>
								<div className={styles.specs__item}>
									<div className={styles.specs__title}>Горчинка</div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="127"
										height="10"
										viewBox="0 0 127 10"
										fill="none">
										<circle cx="5" cy="5" r="5" fill="#F9B300" />
										<circle cx="18" cy="5" r="5" fill="#F9B300" />
										<circle cx="31" cy="5" r="5" fill="#F9B300" />
										<circle cx="44" cy="5" r="5" fill="#F9B300" />
										<circle cx="57" cy="5" r="5" fill="#F9B300" />
										<circle cx="70" cy="5" r="5" fill="#F9B300" />
										<circle cx="83" cy="5" r="5" fill="#F9B300" />
										<circle cx="96" cy="5" r="5" fill="#F0F0F0" />
										<circle cx="109" cy="5" r="5" fill="#F0F0F0" />
										<circle cx="122" cy="5" r="5" fill="#F0F0F0" />
									</svg>
								</div>
								<div className={styles.specs__item}>
									<div className={styles.specs__title}>Насыщенность</div>

									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="127"
										height="10"
										viewBox="0 0 127 10"
										fill="none">
										<circle cx="5" cy="5" r="5" fill="#F9B300" />
										<circle cx="18" cy="5" r="5" fill="#F9B300" />
										<circle cx="31" cy="5" r="5" fill="#F9B300" />
										<circle cx="44" cy="5" r="5" fill="#F9B300" />
										<circle cx="57" cy="5" r="5" fill="#F9B300" />
										<circle cx="70" cy="5" r="5" fill="#F9B300" />
										<circle cx="83" cy="5" r="5" fill="#F9B300" />
										<circle cx="96" cy="5" r="5" fill="#F0F0F0" />
										<circle cx="109" cy="5" r="5" fill="#F0F0F0" />
										<circle cx="122" cy="5" r="5" fill="#F0F0F0" />
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.title}>Colombia Supremo</div>{' '}
					<div className={styles.desc}>Свежеобжаренный кофе - описание товара, вкус, аромат</div>
				</Link>
				<div className={styles.card__bottom}>
					<div className={styles.price}>
						<div className={styles.price__old}>350 ₽</div>
						<div className={styles.price__new}>250 ₽</div>
					</div>
					<Button type={'btn__discound'}>В корзину</Button>
				</div>
			</div>
		</div>
	);
};
