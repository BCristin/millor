import styles from './SortMenuOther.module.scss';

import decor from '../../assets/images/catalog-page/tea/decor.png';
import tea1 from '../../assets/images/catalog-page/tea/tea1.png';
import tea2 from '../../assets/images/catalog-page/tea/tea2.png';
import tea3 from '../../assets/images/catalog-page/tea/tea3.png';
import tea4 from '../../assets/images/catalog-page/tea/tea4.png';
import tea5 from '../../assets/images/catalog-page/tea/tea5.png';
import tea6 from '../../assets/images/catalog-page/tea/tea6.png';
import tea7 from '../../assets/images/catalog-page/tea/tea7.png';
import { SelectSort } from '../../components/SelectSort/SelectSort';

export const SortMenuOther = () => {
	return (
		<div className={'container'}>
			<div className={styles.cards}>
				<div className={styles.card}>
					<img src={tea1} alt="tea1" />
					Черный чай
				</div>
				<div className={styles.card}>
					<img src={tea2} alt="tea2" />
					Зеленый чай
				</div>
				<div className={styles.card}>
					<img src={tea3} alt="tea3" />
					Молочный улунг
				</div>
				<div className={styles.invisibleCard}>
					<div className={styles.decor}>
						<img src={decor} alt="decor" />
					</div>
				</div>
				<div className={styles.card}>
					<img src={tea4} alt="tea4" />
					Травяной чай
				</div>
				<div className={styles.card}>
					<img src={tea5} alt="tea5" />
					Матча
				</div>
				<div className={styles.card}>
					<img src={tea6} alt="tea6" />
					Пуэр
				</div>
				<div className={styles.card}>
					<img src={tea7} alt="tea7" />
					Кофейные напитки
				</div>
			</div>
			<SelectSort className={styles.sortSelect}></SelectSort>
		</div>
	);
};
