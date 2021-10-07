import React from "react";

import styles from "./Input.module.css";

const Input = (props) => {
	const { label, type, value, onChange } = props;

	return (
		<div className={styles.input}>
			<label>{label}</label>
			<input type={type} value={value} onChange={onChange} />
		</div>
	);
};

export default Input;
