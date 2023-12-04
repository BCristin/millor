import { InputSubscribe } from '../../components/InputSubscribe/InputSubscribe';
import { Title } from '../../components/Title/Title';
import styles from './Subscribe.module.scss';

export const Subscribe = () => {
	return (
		<div className={styles.subscribe}>
			<div className={'container'}>
				<Title className={styles.title}>Подписка на новости и рассылку</Title>
				<div className={styles.p}>
					Подпишитесь на нашу рассылку прямо сейчас и будьте в курсе новых поставок, скидок и
					эксклюзивных предложений.
				</div>
				<InputSubscribe />
			</div>
		</div>
	);
};
