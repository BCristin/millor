import { Title } from '../../components/Title/Title';
import styles from './Subscribe.module.scss';

export const Subscribe = () => {
	return (
		<div className={styles.subscribe}>
			<div className="container">
				<Title className={styles.title}>Подписка на новости и рассылку</Title>
				<div className={styles.p}>
					Подпишитесь на нашу рассылку прямо сейчас и будьте в курсе новых поставок, скидок и
					эксклюзивных предложений.
				</div>
				<div className={styles.input}>
					<input type="email" placeholder="Ваш email" />
					<button>Подписаться</button>
					<div className={styles.input__info}>
						Нажимая на кнопку “Подписаться”, вы принимаете правила
						<a href="#!">пользовательского соглашения</a>
					</div>
				</div>
			</div>
		</div>
	);
};
