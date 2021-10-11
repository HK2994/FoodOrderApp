import React from "react";

import styles from "./FormInput.module.css";

const FormInput = (props) => {
	const { id, label, type, value, onBlur, onChange, hasError, errorMessage } =
		props;

	const inputStyles = !hasError
		? styles.control
		: `${styles.control} ${styles.invalid}`;

	return (
		<div className={inputStyles}>
			<label htmlFor={id}>{label}</label>
			<input
				type={type}
				id={id}
				value={value}
				onBlur={onBlur}
				onChange={onChange}
			/>
			{hasError && <p className={styles["error-text"]}>{errorMessage}</p>}
		</div>
	);
};

export default FormInput;
