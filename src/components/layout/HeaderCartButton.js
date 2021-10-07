import React, { useContext, useState } from "react";

import CartIcon from "../cart/CartIcon";
import Cart from "../cart/Cart";
import styles from "./HeaderCartButton.module.css";
import { CartContext } from "../../contexts/CartContext";

const HeaderCartButton = () => {
	const { showCartHandler, meals } = useContext(CartContext);

	return (
		<>
			<button className={styles.button} onClick={showCartHandler}>
				<div className={styles.icon}>
					<CartIcon />
				</div>
				<span>Your Cart</span>
				<span className={styles.badge}>{meals.length}</span>
			</button>
		</>
	);
};

export default HeaderCartButton;
