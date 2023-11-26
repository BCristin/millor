import { useState } from 'react';
import { InputRadioList } from '../InputRadioList/InputRadioList';
import styles from './SortList.module.scss';

export const SortList = ({ title, option }) => {
	const [checkedValue, setCheckedValue] = useState('');

	return (
		<div className={styles['sort-list']}>
			<div className={styles.title}> {title}</div>
			{option.map((value) => (
				<InputRadioList
					key={value}
					name={title}
					checkedValue={checkedValue}
					setCheckedValue={setCheckedValue}>
					{value}
				</InputRadioList>
			))}
		</div>
	);
};
