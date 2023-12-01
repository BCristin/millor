import cn from 'classnames';
import { useState } from 'react';
import { ActiveOrder } from './ActiveOrder';
import { CompletOrder } from './CompletOrder';
import styles from './MyOrders.module.scss';

export const MyOrders = () => {
	const [activeBtn, setActiveBtn] = useState(1);
	return (
		<div className={styles.myoreders}>
			<div className={'container'}>
				<div className={styles.inner}>
					<div className={styles.title}>Мои заказы</div>
					<button
						className={cn({ [styles.active]: activeBtn === 1 })}
						onClick={() => setActiveBtn(1)}>
						Текущие заказы
					</button>
					<button
						className={cn({ [styles.active]: activeBtn === 2 })}
						onClick={() => setActiveBtn(2)}>
						Завершенные
					</button>
					{activeBtn === 1 && <ActiveOrder />}
					{activeBtn === 2 && <CompletOrder />}
				</div>
			</div>
		</div>
	);
};
