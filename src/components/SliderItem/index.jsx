import cup from '../../assets/images/cup-coffe.png';
import { Button } from '../Button';
import styles from './SliderItem.module.scss';

export const SliderItem = ({ children }) => {
	return (
		<div className={styles.slider__item}>
			<div className={styles.title}>{children}</div>
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
