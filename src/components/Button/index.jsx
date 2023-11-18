import classNames from 'classnames';
import styles from './Button.module.scss';

export const Button = ({ children, type = 'big', className }) => {
	const clazz = classNames(styles.btn, className, {
		[styles.big]: type === 'big',
		[styles.small]: type === 'small',
	});

	return <button className={clazz}>{children}</button>;
};
