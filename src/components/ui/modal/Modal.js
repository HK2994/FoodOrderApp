import React from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Backdrop = (props) => {

	const { onClick } = props;

	return <div className={styles.backdrop} onClick={onClick} />;
};

const ModalOverlay = (props) => {
	const { onCancel, onConfirm, meals, children } = props;

	return <div className={styles.modal}>{children}</div>;
};

const Modal = (props) => {
	const { orderedMeals, onCancel, onConfirm, children } = props;

	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClick={onCancel} />,
				document.getElementById("backdrop-root")
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					onCancel={onCancel}
					onConfirm={onConfirm}
					meals={orderedMeals}
				>
					{children}
				</ModalOverlay>,
				document.getElementById("overlay-root")
			)}
		</>
	);
};

export default Modal;
