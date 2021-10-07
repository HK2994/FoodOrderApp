import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import Input from "../ui/input/Input";

import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
	const { meal } = props;

	const [enteredAmount, onChangeEnteredAmount] = useState(0);
	const { addMeal } = useContext(CartContext);

	const onSubmitHandler = (event) => {
		event.preventDefault();
		const cartMeal = {
			...meal,
			amount: +enteredAmount,
		};

		addMeal(cartMeal);
	};

	const onChangeAmountHandler = (event) => {
		const value = event.target.value;

		if (value >= 0) {
			onChangeEnteredAmount(value);
		}
	};

	return (
		<form onSubmit={onSubmitHandler} className={styles.form}>
			<Input
				label="Amount"
				type="number"
				value={enteredAmount}
				onChange={onChangeAmountHandler}
			/>
			<button type="submit">+ Add</button>
		</form>
	);
};

export default MealItemForm;
