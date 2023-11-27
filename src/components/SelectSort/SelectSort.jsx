import cn from 'classnames';
import { useState } from 'react';
import styles from './SelectSort.module.scss';

export const SelectSort = ({ className }) => {
	const [open, setOpen] = useState(false);
	const options = ['По возрастанию цены', 'По убыванию цены', 'По рейтингу', 'По кислотности'];
	const [defaultValui, setDefaultValue] = useState('Сортировка');
	const handleClickOutside = (e) => {
		if (!e.target.closest('.' + styles.select)) setOpen(false);
	};
	return (
		<div className={className}>
			<div className={cn({ [styles.inner]: open })} onClick={handleClickOutside}></div>
			<div className={cn(styles.select, { [styles.select__open]: open })}>
				<div
					className={cn(styles.sort, { [styles.sort__open]: open })}
					onClick={() => setOpen(!open)}>
					{defaultValui}
					<svg
						onClick={() => setOpen(false)}
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						viewBox="0 0 14 14"
						fill="none">
						<path d="M1 1L13 13" stroke="black" strokeLinecap="round" />
						<path d="M13 1L1 13" stroke="black" strokeLinecap="round" />
					</svg>
				</div>
				<div className={cn(styles.select__popup, { [styles.select__popup_open]: open })}>
					<ul>
						{options.map((option) => (
							<li
								key={option}
								onClick={() => {
									setDefaultValue(option);
									setOpen(false);
								}}>
								{option}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
