import cup from '../../assets/images/cup-coffe.png';
import { Button } from '../Button';
import styles from './HeaderSlider.module.scss';
export const HeaderSlider = () => {
	return (
		<div className={styles.inner}>
			<div className={styles.title}>Свежеобжаренный кофе</div>
			<p className={styles.text}>
				Кофе Калининградской обжарки из разных стран произрастания с доставкой на дом.
				<br />
				<br />
				Мы обжариваем кофе <span>каждые выходные.</span>
			</p>
			<Button>Посмотреть каталог</Button>
			<img className={styles.img} src={cup} alt="" />
		</div>
	);
};
