import classNames from 'classnames';
import { useState } from 'react';
import styles from './InputNr.module.scss';

export const InputNr = () => {
	const [nr, setNr] = useState(1);
	if (nr < 1) setNr(1);
	return (
		<div className={styles.nr__pieces}>
			<div
				className={classNames(styles.minus, { [styles.disabled]: nr <= 1 })}
				onClick={() => setNr(nr - 1)}>
				-
			</div>
			<div className={styles.number}>{nr}</div>
			<div className={styles.plus} onClick={() => setNr(nr + 1)}>
				+
			</div>
		</div>
	);
};
