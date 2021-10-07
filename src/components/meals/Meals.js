import React, { useState } from "react";

import Card from "../ui/card/Card";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
	return (
		<>
			<MealsSummary />
			<AvailableMeals />
		</>
	);
};

export default Meals;
