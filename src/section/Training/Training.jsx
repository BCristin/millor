import { WaysAll } from '../../components/WaysAll/WaysAll';
import styles from './Training.module.scss';

export const Training = ({ idhref }) => {
	return (
		<section className={styles.training} id={idhref.slice(1)}>
			<div className={'container'}>
				<h4 className={styles.title}>Приготовление кофе разными способами</h4>
				<WaysAll tab={true}></WaysAll>
			</div>
		</section>
	);
};
