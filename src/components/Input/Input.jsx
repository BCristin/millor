import cn from 'classnames';
import { useState } from 'react';
import styles from './Input.module.scss';

export const Input = ({
	children,
	type = 'text',
	message = 'Это обязательное поле',
	className,
}) => {
	const [messageHidde, setMessageHidde] = useState(false);

	const handler = (e) => {
		setMessageHidde(!e.target.value);
	};
	return (
		<div className={cn(styles.inner)}>
			<input
				type={type}
				placeholder={children}
				onChange={handler}
				className={cn(styles.input, className)}
				required
				autoComplete={type === 'password' ? 'current-password' : 'off'}
			/>
			<p className={messageHidde ? '' : styles.display__none}>{message}</p>
		</div>
	);
};
