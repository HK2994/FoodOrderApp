import { useState } from "react";

const useInput = (validateInput) => {
	const [value, onChangeValue] = useState("");
	const [isTouched, onChangeTouched] = useState(false);

	const isValid = validateInput(value);
	const hasError = !isValid && isTouched;

	const onBlurHandler = () => {
		onChangeTouched(true);
	};

	const onChangeHandler = (event) => {
		onChangeValue(event.target.value);
	};

	const reset = () => {
		onChangeValue("");
		onChangeTouched(false);
	};

	return {
		value,
		hasError,
		isValid,
		onBlurHandler,
		onChangeHandler,
		reset,
	};
};

export default useInput;
