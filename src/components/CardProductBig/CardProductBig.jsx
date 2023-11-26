import internal from '../../assets/images/product/coffe.png';
import img from '../../assets/images/product/image 5.png';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { Button } from '../Button';
import { InputNr } from '../InputNr/InputNr';
import { SortList } from '../SortList/SortList';
import styles from './CardProductBig.module.scss';

export const CardProductBig = () => {
	return (
		<section className={styles.card__product__big}>
			<div className={'container'}>
				<Breadcrumbs className={styles.breadcrumbs}></Breadcrumbs>
				<div className={styles.card}>
					<div className={styles.img}>
						<img src={img} alt="" />
						<img className={styles.internal} src={internal} alt="" />
					</div>
					<div className={styles.info}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="185"
							height="27"
							viewBox="0 0 185 27"
							fill="none">
							<path
								d="M1.21086 22.8224C-1.45438 18.2504 0.359247 11.0797 5.87293 5.71467C12.1343 -0.375387 20.792 -1.82729 25.2123 2.47185C25.2175 2.47748 25.2218 2.48386 25.2289 2.48957C24.3442 4.99331 21.527 10.3206 13.0824 13.2008C5.34676 15.8406 2.36271 20.0375 1.21086 22.8224ZM26.4555 4.03695C25.7855 5.55741 24.6193 7.54442 22.6101 9.49881C20.5905 11.4643 17.72 13.3947 13.654 14.782C5.40192 17.597 3.09625 22.2052 2.45295 24.4384C2.48334 24.4682 2.50947 24.4991 2.53901 24.5281C6.95889 28.8274 15.6169 27.3755 21.8778 21.2845C27.4489 15.865 29.2406 8.60132 26.4555 4.03695Z"
								fill="#505050"
							/>
							<path
								d="M40.5234 22.8224C37.8581 18.2504 39.6717 11.0797 45.1854 5.71467C51.4468 -0.375387 60.1045 -1.82729 64.5248 2.47185C64.53 2.47748 64.5343 2.48386 64.5414 2.48957C63.6567 4.99331 60.8395 10.3206 52.3949 13.2008C44.6593 15.8406 41.6752 20.0375 40.5234 22.8224ZM65.768 4.03695C65.098 5.55741 63.9318 7.54442 61.9226 9.49881C59.903 11.4643 57.0325 13.3947 52.9665 14.782C44.7144 17.597 42.4088 22.2052 41.7654 24.4384C41.7958 24.4682 41.822 24.4991 41.8515 24.5281C46.2714 28.8274 54.9294 27.3755 61.1903 21.2845C66.7614 15.865 68.5531 8.60132 65.768 4.03695Z"
								fill="#505050"
							/>
							<path
								d="M79.8359 22.8224C77.1706 18.2504 78.9842 11.0797 84.4979 5.71467C90.7593 -0.375387 99.417 -1.82729 103.837 2.47185C103.842 2.47748 103.847 2.48386 103.854 2.48957C102.969 4.99331 100.152 10.3206 91.7074 13.2008C83.9718 15.8406 80.9877 20.0375 79.8359 22.8224ZM105.081 4.03695C104.411 5.55741 103.244 7.54442 101.235 9.49881C99.2155 11.4643 96.345 13.3947 92.279 14.782C84.0269 17.597 81.7213 22.2052 81.0779 24.4384C81.1083 24.4682 81.1345 24.4991 81.164 24.5281C85.5839 28.8274 94.2419 27.3755 100.503 21.2845C106.074 15.865 107.866 8.60132 105.081 4.03695Z"
								fill="#505050"
							/>
							<path
								d="M119.148 22.8224C116.483 18.2504 118.297 11.0797 123.81 5.71467C130.072 -0.375387 138.729 -1.82729 143.15 2.47185C143.155 2.47748 143.159 2.48386 143.166 2.48957C142.282 4.99331 139.465 10.3206 131.02 13.2008C123.284 15.8406 120.3 20.0375 119.148 22.8224ZM144.393 4.03695C143.723 5.55741 142.557 7.54442 140.548 9.49881C138.528 11.4643 135.657 13.3947 131.592 14.782C123.339 17.597 121.034 22.2052 120.39 24.4384C120.421 24.4682 120.447 24.4991 120.477 24.5281C124.896 28.8274 133.554 27.3755 139.815 21.2845C145.386 15.865 147.178 8.60132 144.393 4.03695Z"
								fill="#505050"
							/>
							<path
								d="M158.461 22.8224C155.796 18.2504 157.609 11.0797 163.123 5.71467C169.384 -0.375387 178.042 -1.82729 182.462 2.47185C182.467 2.47748 182.472 2.48386 182.479 2.48957C181.594 4.99331 178.777 10.3206 170.332 13.2008C162.597 15.8406 159.613 20.0375 158.461 22.8224ZM183.706 4.03695C183.036 5.55741 181.869 7.54442 179.86 9.49881C177.84 11.4643 174.97 13.3947 170.904 14.782C162.652 17.597 160.346 22.2052 159.703 24.4384C159.733 24.4682 159.759 24.4991 159.789 24.5281C164.209 28.8274 172.867 27.3755 179.128 21.2845C184.699 15.865 186.491 8.60132 183.706 4.03695Z"
								fill="#505050"
							/>
						</svg>
						<div className={styles.top}>
							<div className={styles.left}>
								<h1 className={styles.title}>Colombia Supremo</h1>
								<p className={styles.ingredients}>Мытая, натуральная, смесь</p>
							</div>

							<div className={styles.right}>
								<div className={styles.right__messagefirst}>Популярное</div>
								<div className={styles.right__messagesecond}>Новый урожай</div>
							</div>
						</div>

						<div className={styles.stars__reviews}>
							<svg
								className={styles.stars}
								xmlns="http://www.w3.org/2000/svg"
								width="185"
								height="34"
								viewBox="0 0 185 34"
								fill="none">
								<path
									d="M17.0488 0L20.8764 11.6839H33.2631L23.2421 18.905L27.0698 30.5889L17.0488 23.3678L7.02775 30.5889L10.8554 18.905L0.834425 11.6839H13.2211L17.0488 0Z"
									fill="#F9B300"
								/>
								<path
									d="M54.7743 0L58.602 11.6839H70.9887L60.9677 18.905L64.7954 30.5889L54.7743 23.3678L44.7533 30.5889L48.581 18.905L38.56 11.6839H50.9467L54.7743 0Z"
									fill="#F9B300"
								/>
								<path
									d="M92.4999 0L96.3276 11.6839H108.714L98.6933 18.905L102.521 30.5889L92.4999 23.3678L82.4789 30.5889L86.3066 18.905L76.2856 11.6839H88.6722L92.4999 0Z"
									fill="#F9B300"
								/>
								<path
									d="M130.226 0L134.053 11.6839H146.44L136.419 18.905L140.247 30.5889L130.226 23.3678L120.205 30.5889L124.032 18.905L114.011 11.6839H126.398L130.226 0Z"
									fill="#F9B300"
								/>
								<path
									d="M167.951 0L171.779 11.6839H184.165L174.144 18.905L177.972 30.5889L167.951 23.3678L157.93 30.5889L161.758 18.905L151.737 11.6839H164.123L167.951 0Z"
									fill="#F0F0F0"
								/>
							</svg>
							<div className={styles.reviews}>
								4.0 <span>(32 отзыва)</span>
							</div>
						</div>
						<div className={styles.desc}>
							Компания Нью Рефайнинг Груп находится в г. Калининграде и имеет свой склад и
							представительство в Москве. Завод работает на рынке свежеобжаренного кофе и
							растворимой продукции более 15 лет. Завод имеет немецкое оборудование марки Probat по
							обжарке кофе и итальянские агломераторы для производства растворимой продукции.
						</div>
						<div className={styles.specs}>
							<div className={styles.specs__item}>
								<div className={styles.specs__title}>Кислинка</div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="180"
									height="14"
									viewBox="0 0 180 14"
									fill="none">
									<ellipse cx="7.08661" cy="7" rx="7.08661" ry="7" fill="#F9B300" />
									<ellipse cx="25.5114" cy="7" rx="7.08661" ry="7" fill="#F9B300" />
									<ellipse cx="43.9362" cy="7" rx="7.08661" ry="7" fill="#F9B300" />
									<ellipse cx="62.362" cy="7" rx="7.08661" ry="7" fill="#F9B300" />
									<ellipse cx="80.7868" cy="7" rx="7.08661" ry="7" fill="#F9B300" />
									<ellipse cx="99.2116" cy="7" rx="7.08661" ry="7" fill="#F9B300" />
									<ellipse cx="117.638" cy="7" rx="7.08661" ry="7" fill="#F9B300" />
									<ellipse cx="136.063" cy="7" rx="7.08661" ry="7" fill="#F0F0F0" />
									<ellipse cx="154.488" cy="7" rx="7.08661" ry="7" fill="#F0F0F0" />
									<ellipse cx="172.914" cy="7" rx="7.08661" ry="7" fill="#F0F0F0" />
								</svg>
							</div>
							<div className={styles.specs__item}>
								<div className={styles.specs__title}>Горчинка</div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="180"
									height="14"
									viewBox="0 0 180 14"
									fill="none">
									<ellipse cx="7.08661" cy="7" rx="7.08661" ry="7" fill="#F9B300" />
									<ellipse cx="25.5114" cy="7" rx="7.08661" ry="7" fill="#F9B300" />
									<ellipse cx="43.9362" cy="7" rx="7.08661" ry="7" fill="#F9B300" />
									<ellipse cx="62.362" cy="7" rx="7.08661" ry="7" fill="#F9B300" />
									<ellipse cx="80.7868" cy="7" rx="7.08661" ry="7" fill="#F9B300" />
									<ellipse cx="99.2116" cy="7" rx="7.08661" ry="7" fill="#F9B300" />
									<ellipse cx="117.638" cy="7" rx="7.08661" ry="7" fill="#F9B300" />
									<ellipse cx="136.063" cy="7" rx="7.08661" ry="7" fill="#F0F0F0" />
									<ellipse cx="154.488" cy="7" rx="7.08661" ry="7" fill="#F0F0F0" />
									<ellipse cx="172.914" cy="7" rx="7.08661" ry="7" fill="#F0F0F0" />
								</svg>
							</div>
							<div className={styles.specs__item}>
								<div className={styles.specs__title}>Насыщенность</div>

								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="180"
									height="14"
									viewBox="0 0 180 14"
									fill="none">
									<ellipse cx="7.08661" cy="7" rx="7.08661" ry="7" fill="#F9B300" />
									<ellipse cx="25.5114" cy="7" rx="7.08661" ry="7" fill="#F9B300" />
									<ellipse cx="43.9362" cy="7" rx="7.08661" ry="7" fill="#F9B300" />
									<ellipse cx="62.362" cy="7" rx="7.08661" ry="7" fill="#F9B300" />
									<ellipse cx="80.7868" cy="7" rx="7.08661" ry="7" fill="#F9B300" />
									<ellipse cx="99.2116" cy="7" rx="7.08661" ry="7" fill="#F9B300" />
									<ellipse cx="117.638" cy="7" rx="7.08661" ry="7" fill="#F9B300" />
									<ellipse cx="136.063" cy="7" rx="7.08661" ry="7" fill="#F0F0F0" />
									<ellipse cx="154.488" cy="7" rx="7.08661" ry="7" fill="#F0F0F0" />
									<ellipse cx="172.914" cy="7" rx="7.08661" ry="7" fill="#F0F0F0" />
								</svg>
							</div>
						</div>
						<SortList
							option={['250 г.', '1000 г.']}
							defaultSelect={1}
							className={styles.sort}></SortList>
						<div className={styles.bottom}>
							<InputNr></InputNr>
							<Button className={styles.button}>Купить за 250 ₽ </Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
