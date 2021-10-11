import React from "react";
import useInput from "../../hooks/useInput";
import { checkEmptyInput } from "../../utils/validateInput";
import FormInput from "../ui/input/FormInput";

import styles from "./Checkout.module.css";

const Checkout = (props) => {
	const { onCancel, onConfirm } = props;

	const {
		value: name,
		hasError: hasNameError,
		isValid: nameIsValid,
		onBlurHandler: nameOnBlurHandler,
		onChangeHandler: nameOnChangeHandler,
		reset: nameReset,
	} = useInput(checkEmptyInput);

	const {
		value: street,
		hasError: hasStreetError,
		isValid: streetIsValid,
		onBlurHandler: streetOnBlurHandler,
		onChangeHandler: streetOnChangeHandler,
		reset: streetReset,
	} = useInput(checkEmptyInput);

	const {
		value: postal,
		hasError: hasPostalError,
		isValid: postalIsValid,
		onBlurHandler: postalOnBlurHandler,
		onChangeHandler: postalOnChangeHandler,
		reset: postalReset,
	} = useInput(checkEmptyInput);

	const {
		value: city,
		hasError: hasCityError,
		isValid: cityIsValid,
		onBlurHandler: cityOnBlurHandler,
		onChangeHandler: cityOnChangeHandler,
		reset: cityReset,
	} = useInput(checkEmptyInput);

	const clearInputs = () => {
		nameReset();
		streetReset();
		postalReset();
		cityReset();
	};

	const inputsValid =
		nameIsValid && streetIsValid && postalIsValid && cityIsValid;

	const submitHandler = (event) => {
		event.preventDefault();

		if (!inputsValid) {
			return;
		}

		const formInputs = {
			user: {
				name,
				street,
				postal,
				city,
			},
		};
		onConfirm(formInputs);
		clearInputs();
	};

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<FormInput
				id="name"
				type="text"
				value={name}
				label="Your Name"
				onChange={nameOnChangeHandler}
				onBlur={nameOnBlurHandler}
				hasError={hasNameError}
				errorMessage="Name is empty"
			/>
			<FormInput
				id="street"
				type="text"
				value={street}
				label="Street"
				onChange={streetOnChangeHandler}
				onBlur={streetOnBlurHandler}
				hasError={hasStreetError}
				errorMessage="Street is empty"
			/>
			<FormInput
				id="postal"
				type="text"
				value={postal}
				label="Postal Code"
				onChange={postalOnChangeHandler}
				onBlur={postalOnBlurHandler}
				hasError={hasPostalError}
				errorMessage="Postal Code is empty"
			/>
			<FormInput
				id="city"
				type="text"
				value={city}
				label="City"
				onChange={cityOnChangeHandler}
				onBlur={cityOnBlurHandler}
				hasError={hasCityError}
				errorMessage="City is empty"
			/>
			<div className={styles.actions}>
				<button className={styles.button} onClick={onCancel}>
					Close
				</button>
				<button
					disabled={!inputsValid}
					type="submit"
					className={styles.button}
				>
					Confirm
				</button>
			</div>
		</form>
	);
};

export default Checkout;
