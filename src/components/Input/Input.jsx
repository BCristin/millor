import { useState } from 'react';
import styles from './Input.module.scss';

export const Input = ({ children }) => {
	const [message, setMessage] = useState('');
	console.table(message);
	const handler = (e) => {
		setMessage(e.target.value);
	};
	return (
		<div className={styles.inner}>
			<input
				type="text"
				placeholder={children}
				onChange={handler}
				className={styles.input}
				required
			/>
			<p className={message ? '' : styles.display__none}>Это обязательное поле</p>
		</div>
	);
};
