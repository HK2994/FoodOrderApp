import React from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Backdrop = (props) => {
	const { onClick } = props;

	return <div className={styles.backdrop} onClick={onClick} />;
};

const ModalOverlay = (props) => {
	const { children } = props;

	return <div className={styles.modal}>{children}</div>;
};

const Modal = (props) => {
	const { onCancel, children } = props;

	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClick={onCancel} />,
				document.getElementById("backdrop-root")
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{children}</ModalOverlay>,
				document.getElementById("overlay-root")
			)}
		</>
	);
};

export default Modal;
