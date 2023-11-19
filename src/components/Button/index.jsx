import classNames from 'classnames';
import styles from './Button.module.scss';

export const Button = ({ children, type = 'big', className }) => {
	const clazz = classNames(styles.btn, className, {
		[styles.big]: type === 'big',
		[styles.card__catalog]: type === 'card__catalog',
		[styles.card__discound]: type === 'card__discound',
	});

	return <button className={clazz}>{children}</button>;
};
