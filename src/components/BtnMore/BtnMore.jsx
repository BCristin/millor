import styles from './BtnMore.module.scss';

export const BtnMore = ({ children }) => {
	return <button className={styles.btn}> {children}</button>;
};
