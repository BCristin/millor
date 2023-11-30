import { WaysAll } from '../../components/WaysAll/WaysAll';
import styles from './InfoProduct.module.scss';

export const HowToCook = ({ isCoffe, text }) => {
	return (
		<section className={styles.how_to_cook} id="how_to_cook">
			<div className={'container'}>
				<h3 className={styles.title}>Как готовить?</h3>
				{isCoffe ? <WaysAll /> : <div className={styles.text}>{text}</div>}
			</div>
		</section>
	);
};
