import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import Modal from "../ui/modal/Modal";

import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = () => {
	const { meals, hideCartHandler, addAmount, reduceAmount, clearCart } =
		useContext(CartContext);

	const [formIsHidden, setFormIsHidden] = useState(true);

	const totalAmount = meals.reduce((prev, curr) => {
		const currTotalPrice = curr.price * curr.amount;
		return prev + currTotalPrice;
	}, 0);

	const onSubmitHandler = (formInputs) => {
		const payload = {
			...formInputs,
			meals,
		};
		console.log(payload);
		fetch(
			"https://react-http-b56cf-default-rtdb.firebaseio.com/orders.json",
			{
				method: "POST",
				body: JSON.stringify({ ...payload }),
			}
		);
		clearCart();
		hideCartHandler();
	};

	return (
		<Modal onCancel={hideCartHandler}>
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
			{!formIsHidden && (
				<div>
					<Checkout
						onCancel={hideCartHandler}
						onConfirm={onSubmitHandler}
					/>
				</div>
			)}
			{formIsHidden && (
				<div className={styles.actions}>
					<button
						className={styles["button--alt"]}
						onClick={hideCartHandler}
					>
						Close
					</button>
					<button
						className={styles.button}
						onClick={() => setFormIsHidden(false)}
					>
						Order
					</button>
				</div>
			)}
		</Modal>
	);
};

export default Cart;
