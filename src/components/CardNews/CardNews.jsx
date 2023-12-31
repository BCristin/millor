import { PMore } from '../PMore/PMore';
import styles from './CardNews.module.scss';
export const CardNews = ({ img, children, title }) => {
	return (
		<div className={styles.card}>
			<div className={styles.img}>{img && <img src={img} alt="img" />}</div>
			<div className={styles.info}>
				<div className={styles.title}>{title}</div>
				<div className={styles.text}>{children}</div>
				<PMore>Подробнее</PMore>
			</div>
		</div>
	);
};
