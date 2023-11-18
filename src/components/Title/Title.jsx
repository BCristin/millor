import cn from 'classnames';
import styles from './Title.module.scss';

export const Title = ({ children, className }) => {
	return <h3 className={cn(styles.title, className)}>{children}</h3>;
};
