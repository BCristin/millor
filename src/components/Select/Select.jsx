import cn from 'classnames';
import { useState } from 'react';
import styles from './Select.module.scss';

export const Select = () => {
	const [open, setOpen] = useState(false);
	const options = ['100 г.', '250 г.', '500 г.', '1000 г.'];
	const [seletedOption, setSeletedOption] = useState(options[0]);

	return (
		<div className={styles.select}>
			<div
				className={styles.select__label}
				onClick={() => {
					setOpen(!open);
				}}>
				{seletedOption}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="14"
					height="7"
					viewBox="0 0 14 7"
					fill="none">
					<path d="M1 1L7 6L13 1" stroke="black" strokeWidth="1.5" />
				</svg>
			</div>
			{
				<div className={cn(styles.select__popup, { [styles.select__popup_active]: open })}>
					<ul>
						{options.map((option) => (
							<li
								key={option}
								onClick={() => {
									setSeletedOption(option);
									setOpen(false);
								}}>
								{option}
							</li>
						))}
					</ul>
				</div>
			}
		</div>
	);

	// eslint-disable-next-line no-unreachable
	return (
		<div>
			<select className={styles.selector} name="" id="">
				<option value="250"> 250 г.</option>
				<option value="500"> 500 г.</option>
				<option value="500"> 1000 г.</option>
			</select>
		</div>
	);
};
