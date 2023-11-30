import { useState } from 'react';
import styles from './Spoiler.module.scss';

export const Spoiler = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className={styles.spoiler}>
			<div className={styles.name}>
				<div className={styles.title}>
					Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?
				</div>
				<div className={styles.icon} onClick={() => setOpen(!open)}>
					{open ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="25"
							height="4"
							viewBox="0 0 25 4"
							fill="none">
							<path d="M23 2L2 2" stroke="black" strokeWidth="3" strokeLinecap="round" />
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="25"
							height="25"
							viewBox="0 0 25 25"
							fill="none">
							<path d="M12.5 2V23" stroke="black" strokeWidth="3" strokeLinecap="round" />
							<path d="M23 12L2 12" stroke="black" strokeWidth="3" strokeLinecap="round" />
						</svg>
					)}
				</div>
			</div>
			{open && (
				<div className={styles.text}>
					Задача организации, в особенности же рамки и место обучения кадров способствует подготовки
					и реализации систем массового участия. Таким образом укрепление и развитие структуры
					способствует подготовки и реализации направлений прогрессивного развития
				</div>
			)}
		</div>
	);
};
