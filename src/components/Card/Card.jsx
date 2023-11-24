import { Link } from 'react-router-dom';
import { Button } from '../Button';
import styles from './Card.module.scss';

export const Card = ({ img, title, link }) => {
	return (
		<div className={styles.card}>
			<div className={styles.img}>
				<img src={img} alt={'photo ' + title} />
			</div>
			<div className={styles.title}>{title}</div>
			<Link to={`/${link}`}>
				<Button type={'btn__catalog'}>Купить</Button>
			</Link>
		</div>
	);
};
