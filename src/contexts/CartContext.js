import React from "react";

export const CartContext = React.createContext({
	meals: [],
	showCartHandler: () => {},
	hideCartHandler: () => {},
	addMeal: (meal) => {},
	addAmount: (id) => {},
	reduceAmount: (id) => {},
	clearCart: () => {},
});
