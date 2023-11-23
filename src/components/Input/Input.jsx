import cn from 'classnames';
import { useState } from 'react';
import styles from './Input.module.scss';

export const Input = ({
	children,
	type = 'text',
	message = 'Это обязательное поле',
	className,
}) => {
	const [viewPassword, setViewPassword] = useState(false);
	const [messageHidde, setMessageHidde] = useState(false);

	const handler = (e) => {
		setMessageHidde(!e.target.value);
	};
	return (
		<div className={cn(styles.inner)}>
			<input
				type={viewPassword ? 'text' : type}
				placeholder={children}
				onChange={handler}
				className={cn(styles.input, className)}
				required
				autoComplete={type === 'password' ? 'current-password' : 'off'}
			/>
			{type === 'password' && (
				<svg
					className={styles.view__password}
					onClick={() => setViewPassword(!viewPassword)}
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="18"
					viewBox="0 0 24 18"
					fill="none">
					<path
						d="M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z"
						stroke="black"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
						stroke="black"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			)}
			<p className={messageHidde ? '' : styles.display__none}>{message}</p>
		</div>
	);
};
