import cn from 'classnames';
import { useState } from 'react';
import styles from './Input.module.scss';

export const Input = ({ children, message, className, valueInput }) => {
	const [messageHidde, setMessageHidde] = useState(false);

	const handler = (e) => {
		setMessageHidde(e.target.value);
		valueInput(e.target.value.trim());
	};
	return (
		<div className={cn(styles.inner, className)}>
			<input
				type="text"
				placeholder={children}
				onChange={handler}
				className={styles.input}
				required
			/>
			<p className={messageHidde ? '' : styles.display__none}>{message}</p>
		</div>
	);
};
