import cn from 'classnames';
import { useState } from 'react';
import styles from './Promocode.module.scss';

const promocodes = ['coffee2021', 'test', 'hopp', 'coffe50'];
const oldPromocodes = ['coffee2020', 'test', 'test2', 'hopp2', 'coffe70'];

export const Promocode = () => {
	const [inputPromoCode, setInputPromoCode] = useState('');
	const [validCode, setValidCode] = useState('');
	const [oldCode, setOldCode] = useState('');

	// const validCode = promocodes.includes(inputPromoCode);
	// const oldCode = oldPromocodes.includes(inputPromoCode);
	const handler = () => {
		setValidCode(promocodes.includes(inputPromoCode));
		setOldCode(oldPromocodes.includes(inputPromoCode));
	};
	return (
		<div className={styles.promocode}>
			<div className={styles.title}>Промокод</div>
			<p className={styles.p}>
				Введите подарочный промокод в поле ниже и получите скидку на заказ до 20%. Скидка не
				распространяется на доставку
			</p>

			<div className={cn(styles.inner_input)}>
				<input
					type="text"
					placeholder="Введите промокод"
					onChange={(e) => setInputPromoCode(e.target.value.trim())}
					className={styles.input}
					required
				/>
				{oldCode ? (
					<svg
						width="13"
						height="12"
						viewBox="0 0 13 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M1 1L12 11" stroke="white" strokeLinecap="round" />
						<path d="M12 1L0.999999 11" stroke="white" strokeLinecap="round" />
					</svg>
				) : validCode ? (
					<svg
						width="15"
						height="12"
						viewBox="0 0 15 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M14 1L5.0625 11L1 6.45455"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				) : (
					''
				)}
				<p className={validCode || oldCode ? '' : styles.display__none}>
					{oldCode
						? 'Срок действия промокода истёк'
						: validCode
						? `Скидка -15% по промокоду “${inputPromoCode}”`
						: ''}
				</p>
			</div>
			<button className={styles.btn} onClick={handler}>
				Ввести промокод
			</button>
		</div>
	);
};
