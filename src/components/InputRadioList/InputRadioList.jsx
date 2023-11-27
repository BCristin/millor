// import styles from './InputRadioList.module.scss';
import styles from '../InputCustomRadio/InputCustomRadio.module.scss';

export const InputRadioList = ({ children, title, setCheckedValue, checkedValue }) => {
	return (
		<label className={styles['radiobutton-label']}>
			<input
				className={styles['radiobutton-input']}
				type="radio"
				name={title}
				value={children}
				onChange={(e) => setCheckedValue(e.target.value)}
				checked={children === checkedValue}
			/>
			<span className={styles['custom-radiobutton']} />
			<span> {children}</span>
		</label>
	);
};
