import benefitDecor from '../../assets/images/benfits/benefit-decor.png';
import { Title } from '../../components/Title/Title';
import styles from './Benefits.module.scss';
export const Benefits = () => {
	return (
		<div className={styles.benefits}>
			<div className="container">
				<div className={styles.benefits__inner}>
					<div className={styles.img}>
						<img src={benefitDecor} alt="" />
					</div>
					<div className={styles.content}>
						<Title>
							Почему стоит работать <br></br> именно с нами?
						</Title>
						<div className={styles.cards}>
							<div className={styles.card}>
								<div className={styles.icon}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="43"
										height="42"
										viewBox="0 0 43 42"
										fill="none">
										<g filter="url(#filter0_d_85_254)">
											<path
												d="M29.619 12.5H31.0952C32.6613 12.5 34.1632 13.1321 35.2705 14.2574C36.3779 15.3826 37 16.9087 37 18.5C37 20.0913 36.3779 21.6174 35.2705 22.7426C34.1632 23.8679 32.6613 24.5 31.0952 24.5H29.619M29.619 12.5H6V26C6 27.5913 6.62211 29.1174 7.72946 30.2426C8.83682 31.3679 10.3387 32 11.9048 32H23.7143C25.2803 32 26.7822 31.3679 27.8896 30.2426C28.9969 29.1174 29.619 27.5913 29.619 26V12.5ZM11.9048 2V6.5M17.8095 2V6.5M23.7143 2V6.5"
												stroke="white"
												strokeWidth="3"
												strokeLinecap="round"
												strokeLinejoin="round"
												shapeRendering="crispEdges"
											/>
										</g>
										<defs>
											<filter
												id="filter0_d_85_254"
												x="0.5"
												y="0.5"
												width="42"
												height="41"
												filterUnits="userSpaceOnUse"
												colorInterpolationFilters="sRGB">
												<feFlood floodOpacity="0" result="BackgroundImageFix" />
												<feColorMatrix
													in="SourceAlpha"
													type="matrix"
													values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
													result="hardAlpha"
												/>
												<feOffset dy="4" />
												<feGaussianBlur stdDeviation="2" />
												<feComposite in2="hardAlpha" operator="out" />
												<feColorMatrix
													type="matrix"
													values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
												/>
												<feBlend
													mode="normal"
													in2="BackgroundImageFix"
													result="effect1_dropShadow_85_254"
												/>
												<feBlend
													mode="normal"
													in="SourceGraphic"
													in2="effect1_dropShadow_85_254"
													result="shape"
												/>
											</filter>
										</defs>
									</svg>
								</div>
								<div className={styles.text}>
									<div className={styles.title}>Всегда свежая обжарка</div>
									<p className={styles.p}>
										Подбор степени обжарки под каждый сорт кофе. Всегда свежая обжарка
									</p>
								</div>
							</div>
							<div className={styles.card}>
								<div className={styles.icon}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="84"
										height="84"
										viewBox="0 0 84 84"
										fill="none">
										<circle cx="42" cy="42" r="42" />
										<path
											d="M34.0849 35.087H34.1011M56.0596 45.4545L44.4659 57.0513C44.1655 57.352 43.8089 57.5906 43.4163 57.7534C43.0237 57.9162 42.6028 58 42.1778 58C41.7529 58 41.332 57.9162 40.9394 57.7534C40.5468 57.5906 40.1902 57.352 39.8898 57.0513L26 43.174V27H42.1698L56.0596 40.8935C56.6619 41.4995 57 42.3194 57 43.174C57 44.0286 56.6619 44.8484 56.0596 45.4545Z"
											stroke="white"
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<div className={styles.text}>
									<div className={styles.title}>Лучшие цены на продукцию</div>
									<p className={styles.p}>
										Благодаря крупным объемам производства мы даем лучшие цены на нашу продукцию
									</p>
								</div>
							</div>{' '}
							<div className={styles.card}>
								<div className={styles.icon}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="40"
										height="34"
										viewBox="0 0 40 34"
										fill="none">
										<path
											d="M26.5455 32V28.6667C26.5455 26.8986 25.8558 25.2029 24.6283 23.9526C23.4008 22.7024 21.736 22 20 22H8.54545C6.80949 22 5.14463 22.7024 3.91712 23.9526C2.68961 25.2029 2 26.8986 2 28.6667V32M28.1818 15.3333L31.4545 18.6667L38 12M20.8182 8.66667C20.8182 12.3486 17.8877 15.3333 14.2727 15.3333C10.6578 15.3333 7.72727 12.3486 7.72727 8.66667C7.72727 4.98477 10.6578 2 14.2727 2C17.8877 2 20.8182 4.98477 20.8182 8.66667Z"
											stroke="white"
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<div className={styles.text}>
									<div className={styles.title}>Консультации 24/7</div>
									<p className={styles.p}>
										Наши специалисты готовы всегда помочь и подсказать вам с выбором кофе или другой
										продукции.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
