// import styles from './InputRadioList.module.scss';
import styles from '../InputCustomRadio/InputCustomRadio.module.scss';

export const InputRadioList = ({ children, title, setCheckedValue, checkedValue }) => {
	const childrenNew = children?.props?.children[0] || children;
	const checkedValueNew = checkedValue?.props?.children[0] || checkedValue;

	return (
		<label className={styles['radiobutton-label']}>
			<input
				className={styles['radiobutton-input']}
				type="radio"
				name={title}
				value={childrenNew}
				onChange={(e) => setCheckedValue(e.target.value)}
				checked={childrenNew === checkedValueNew}
			/>
			<span className={styles['custom-radiobutton']} />
			<span> {children}</span>
		</label>
	);
};
