import React, { useReducer, useState } from "react";
import Cart from "./components/cart/Cart";

import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import { CartContext } from "./contexts/CartContext";
import { CartReducer } from "./reducers/CartReducer";

function App() {
	const [state, dispatch] = useReducer(CartReducer, { meals: [] });
	const [showCart, setShowCart] = useState(false);

	const showCartHandler = () => {
		setShowCart(true);
	};

	const hideCartHandler = () => {
		setShowCart(false);
	};

	const addMealHandler = (meal) => {
		if (meal.amount > 0) {
			dispatch({ type: "ADD_CART", payload: meal });
		}
	};

	const addAmountHandler = (meal) => {
		dispatch({
			type: "UPDATE_AMOUNT",
			payload: { id: meal.id, amount: 1 },
		});
	};

	const reduceAmountHandler = (meal) => {
		if (meal.amount > 0) {
			dispatch({
				type: "UPDATE_AMOUNT",
				payload: { id: meal.id, amount: -1 },
			});
		}
	};

	return (
		<CartContext.Provider
			value={{
				meals: state.meals,
				addMeal: addMealHandler,
				showCartHandler,
				hideCartHandler,
				addAmount: addAmountHandler,
				reduceAmount: reduceAmountHandler,
			}}
		>
			{showCart && <Cart />}
			<Header />
			<main>
				<Meals />
			</main>
		</CartContext.Provider>
	);
}

export default App;
