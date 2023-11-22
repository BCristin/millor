import styles from './PMore.module.scss';

export const PMore = ({ children }) => {
	return <div className={styles.more}>{children}</div>;
};
