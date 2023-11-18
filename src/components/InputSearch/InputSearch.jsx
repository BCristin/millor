import styles from './InputSearch.module.scss';

export const InputSearch = ({ setVisibleInput }) => {
	return (
		<>
			<svg
				className={styles.icon__search}
				xmlns="http://www.w3.org/2000/svg"
				width="36"
				height="35"
				viewBox="0 0 36 35"
				fill="none">
				<path
					d="M34 33L26.2667 25.5083M30.4444 15.7778C30.4444 23.387 24.0769 29.5556 16.2222 29.5556C8.36751 29.5556 2 23.387 2 15.7778C2 8.16852 8.36751 2 16.2222 2C24.0769 2 30.4444 8.16852 30.4444 15.7778Z"
					stroke="#C4C4C4"
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
			<input
				className={styles.input}
				onMouseLeave={() => setVisibleInput(false)}
				type="search"
				name=""
				id=""
				placeholder="Поиск по товарам"
			/>
		</>
	);
};
