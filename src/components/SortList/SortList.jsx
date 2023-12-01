import classNames from 'classnames';
import { useState } from 'react';
import { InputRadioList } from '../InputRadioList/InputRadioList';
import styles from './SortList.module.scss';

export const SortList = ({ title = null, option, defaultSelect = '', className }) => {
	const [checkedValue, setCheckedValue] = useState(option[defaultSelect - 1]);

	return (
		<div className={classNames(styles['sort-list'], className)}>
			{title && <div className={styles.title}>{title}</div>}
			{option.map((value, index) => (
				<InputRadioList
					key={index}
					name={title}
					checkedValue={checkedValue}
					setCheckedValue={setCheckedValue}>
					{value}
				</InputRadioList>
			))}
		</div>
	);
};
