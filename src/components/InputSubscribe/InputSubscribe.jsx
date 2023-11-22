import cn from 'classnames';
import { useState } from 'react';
import styles from './InputSubscribe.module.scss';
export const InputSubscribe = () => {
	const [submitted, setSubmitted] = useState(false);
	const [validInput, setValidInput] = useState(false);
	const handler = (e) => {
		e.preventDefault();

		if (validInput) setSubmitted(!submitted);
	};
	const changeInput = (e) => {
		setValidInput(e.target.validity.valid);
	};
	return (
		<form className={styles.input}>
			<input
				type="email"
				placeholder="Ваш email"
				onChange={changeInput}
				required
				className={cn({ [styles.red__border]: !validInput })}
			/>
			<button
				onClick={handler}
				className={cn({ [styles.submitted]: submitted, [styles.red__border]: validInput })}>
				{submitted ? 'Спасибо за подписку!' : 'Подписаться'}
			</button>
			<div className={cn(styles.input__info, { [styles.hidden]: submitted })}>
				Нажимая на кнопку “Подписаться”, вы принимаете правила
				<a href="#!"> пользовательского соглашения</a>
			</div>
		</form>
	);
};
