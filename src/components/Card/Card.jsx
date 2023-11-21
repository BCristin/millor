import { Button } from '../Button';
import styles from './Card.module.scss';

export const Card = ({ img, title }) => {
	return (
		<div className={styles.card}>
			<div className={styles.img}>
				<img src={img} alt={'photo ' + title} />
			</div>
			<div className={styles.title}>{title}</div>
			<Button type={'btn__catalog'}>Купить</Button>
		</div>
	);
};
