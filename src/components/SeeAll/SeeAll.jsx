import cn from 'classnames';
import styles from './SeeAll.module.scss';

export const SeeAll = ({ children, className }) => {
	return <p className={cn(styles.seeall, className)}>{children}</p>;
};
