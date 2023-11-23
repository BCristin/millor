import classNames from 'classnames';
import styles from './Button.module.scss';

export const Button = ({ children, type, className }) => {
	const clazz = classNames(styles.btn, className, {
		[styles.btn__catalog]: type === 'btn__catalog',
		[styles.btn__discound]: type === 'btn__discound',
	});

	return <button className={clazz}>{children}</button>;
};
