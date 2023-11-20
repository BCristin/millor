import { Button } from '../../components/Button';
import { Title } from '../../components/Title/Title';
import styles from './Roasting.module.scss';

export const Roasting = () => {
	return (
		<div className={styles.roasting}>
			<div className="container">
				<div className={styles.roasting__inner}>
					<Title className={styles.title}>Как мы обжариваем наш кофе:</Title>
					<div className={styles.p}>
						Компания Нью Рефайнинг Груп находится в г. Калининграде и имеет свой склад и
						представительство в Москве. Завод работает на p.рынке свежеобжаренного кофе и
						растворимой продукции более 15 лет. Завод имеет немецкое оборудование марки Probat по
						обжарке кофе и итальянские агломераторы для производства растворимой продукции.
						<br />
						<br />
						Кофе поставляется в контейнерах напрямую с плантаций по всему миру. Компания имеет
						долгосрочные контракты по поставке продукции. Каждая партия проходит строгий контроль на
						заводе для проверки зерна. Зеленое зерно обжаривается, проходит процесс дегазации и тут
						же отправляется клиентам. Наши обжарщики прошли обучение в России и за рубежом. <br />У
						нас свой подход к каждой партии зерна.
						<br />
						<br /> Мы раскрываем вкус каждого сорта кофе.
					</div>
					<Button>Перейти в каталог</Button>
				</div>
			</div>
		</div>
	);
};