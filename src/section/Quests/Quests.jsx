import { Spoiler } from '../../components/Spoiler/Spoiler';
import styles from './Quests.module.scss';

export const Quests = ({ idhref }) => {
	return (
		<section className={styles.quests} id={idhref.slice(1)}>
			<div className={'container'}>
				<div className={styles.title}>Частые вопросы:</div>
				<div className={styles.spoiler}>
					<Spoiler />
					<Spoiler />
					<Spoiler />
					<Spoiler />
					<Spoiler />
				</div>
			</div>
		</section>
	);
};
