import styles from './InputCustomRadio.module.scss';

export const InputCustomRadio = ({ children, setCheckedValue, checkedValue }) => {
	const svg = (nr) => {
		return Array.from({ length: nr }, (_, index) => (
			<svg
				key={index}
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none">
				<path
					d="M1.04723 20.2866C-1.25785 16.2226 0.3107 9.84864 5.07929 5.0797C10.4945 -0.333678 17.9822 -1.62425 21.8052 2.1972C21.8097 2.2022 21.8134 2.20787 21.8196 2.21295C21.0545 4.4385 18.618 9.17387 11.3145 11.734C4.62422 14.0805 2.04343 17.8112 1.04723 20.2866ZM22.8805 3.5884C22.301 4.93992 21.2924 6.70615 19.5547 8.44339C17.808 10.1905 15.3254 11.9064 11.8089 13.1396C4.67193 15.6418 2.67784 19.738 2.12147 21.723C2.14775 21.7495 2.17035 21.777 2.1959 21.8027C6.0185 25.6243 13.5065 24.3338 18.9214 18.9195C23.7396 14.1022 25.2891 7.64562 22.8805 3.5884Z"
					fill="#505050"
				/>
			</svg>
		));
	};
	return (
		<label className={styles['radiobutton-label']}>
			<input
				className={styles['radiobutton-input']}
				type="radio"
				name={'beans'}
				value={children}
				onChange={(e) => setCheckedValue(e.target.value)}
				checked={children === +checkedValue}
			/>
			<span className={styles['custom-radiobutton']} />
			{svg(children)}
		</label>
	);
};
