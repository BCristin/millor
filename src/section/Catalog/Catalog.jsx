import cereal from '../../assets/images/catalog/cereal.png';
import coffeMachine from '../../assets/images/catalog/coffe-machine.png';
import coffeeBeans from '../../assets/images/catalog/coffee-beans.png';
import teaKettle from '../../assets/images/catalog/tea-kettle.png';

import { Card } from '../../components/Card/Card';
import { Title } from '../../components/Title/Title';
import styles from './Catalog.module.scss';
export const Catalog = () => {
	return (
		<section className={styles.catalog} id="catalog">
			<Title className={styles.title}>Каталоги нашей продукции</Title>
			<div className={styles.cards}>
				<Card img={coffeeBeans} title={'Свежеобжаренный кофе'} link={'coffe'}></Card>
				<Card img={teaKettle} title={'Чай и кофейные напитки'} link={'tea'}></Card>
				<Card img={coffeMachine} title={'Продукция для вендинга'} link={'machine'}></Card>
				<Card img={cereal} title={'Здоровое питание'} link={'cereal'}></Card>
			</div>
			<svg
				className={styles.decor}
				width="1230"
				height="1380"
				viewBox="0 0 1230 1380"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M556.543 1271.45C448.013 1252.2 330.882 1303.89 235.653 1240.72C126.826 1168.54 17.3975 1056.05 2.13465 903.699C-13.0132 752.495 103.774 630.284 160.499 490.537C215.645 354.68 228.971 187.166 329.442 97.3435C433.886 3.96871 572.692 -15.7036 696.205 11.6052C813.693 37.5819 895.325 149.271 985.182 242.328C1078.9 339.383 1223.37 411.207 1229.81 564.218C1236.32 718.902 1073.84 806.105 1014.85 946.89C959.107 1079.93 1003.1 1283.04 897.211 1358.03C791.267 1433.05 674.506 1292.36 556.543 1271.45Z"
					fill="#F9B300"
				/>
			</svg>
		</section>
	);
};
