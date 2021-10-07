const getMealIndex = (state, mealToCheck) => {
	return state.meals.findIndex((meal) => meal.id === mealToCheck.id);
};

export const CartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_CART":
			const addedMeal = action.payload;
			const mealIndex = getMealIndex(state, addedMeal);
			const prevMeal = state.meals[mealIndex];

			if (prevMeal) {
				const updatedMeal = {
					...prevMeal,
					amount: prevMeal.amount + action.payload.amount,
				};
				let updatedMeals = [...state.meals];
				updatedMeals[mealIndex] = updatedMeal;

				return { meals: updatedMeals };
			}

			return { meals: state.meals.concat(addedMeal) };
		case "REMOVE_CART":
			return {
				meals: state.meals.filter(
					(meal) => meal.id !== action.payload.id
				),
			};
		case "UPDATE_AMOUNT":
			const updatedIndex = state.meals.findIndex(
				(meal) => meal.id === action.payload.id
			);
			const foundMeal = state.meals[updatedIndex];

			if (foundMeal) {
				const updatedMeal = {
					...foundMeal,
					amount: foundMeal.amount + action.payload.amount,
				};
				let updatedMeals = [...state.meals];
				updatedMeals[updatedIndex] = updatedMeal;

				return { meals: updatedMeals };
			}

			return { meals: state.meals };
		default:
			return { meals: state.meals };
	}
};
