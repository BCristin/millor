import icon from '../../assets/images/product/icon-review.jpg';
import styles from './CardReviews.module.scss';

export const CardReviews = () => {
	return (
		<div className={styles.card_review}>
			<div className={styles.top}>
				<div className={styles.quates}>“”</div>
				<div className={styles.inner}>
					<div className={styles.title}>Отличный вкус!</div>
					<div className={styles.date}>21.12.2020</div>
				</div>
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
				<div className={styles.text}>
					Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу
					(специалистов) участие в формировании соответствующий условий активизации.
				</div>
			</div>
			<div className={styles.bottom}>
				<div className={styles.icon}>
					<img src={icon} alt="" />
				</div>
				<div className={styles.name_and_city}>
					<div className={styles.name}>Ирина </div>
					<div className={styles.city}>г. Москва</div>
				</div>
			</div>
		</div>
	);
};
