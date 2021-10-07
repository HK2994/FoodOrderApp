import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import Modal from "../ui/modal/Modal";

import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
	const { meals, hideCartHandler, onConfirm, addAmount, reduceAmount } =
		useContext(CartContext);

	const totalAmount = meals.reduce((prev, curr) => {
		const currTotalPrice = curr.price * curr.amount;
		return prev + currTotalPrice;
	}, 0);

	return (
		<Modal onCancel={hideCartHandler} onConfirm={onConfirm}>
			<ul className={styles["cart-items"]}>
				{meals.map((meal) => {
					return (
						<CartItem
							key={meal.id}
							meal={meal}
							addAmount={addAmount}
							reduceAmount={reduceAmount}
						/>
					);
				})}
			</ul>
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>{`$${totalAmount.toFixed(2)}`}</span>
			</div>
			<div className={styles.actions}>
				<button
					className={styles["button--alt"]}
					onClick={hideCartHandler}
				>
					Close
				</button>
				<button className={styles.button}>Order</button>
			</div>
		</Modal>
	);
};

export default Cart;
