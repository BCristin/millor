import cn from 'classnames';
import styles from './BtnMore.module.scss';
export const BtnMore = ({ children, className }) => {
	return <button className={cn(styles.btn, className)}> {children}</button>;
};
