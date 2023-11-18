import { Button } from '../Button';
import styles from './Card.module.scss';

export const Card = ({ img, title }) => {
	return (
		<div className={styles.card}>
			<img src={img} alt={'photo ' + title} />
			<div className={styles.title}>{title}</div>
			<Button className={styles.hidden} type={'small'}>
				Купить
			</Button>
		</div>
	);
};
