import React, { useState } from "react";

import styles from "./AvailableMeals.module.css";
import { DUMMY_MEALS } from "../../db/meals";
import MealItem from "./MealItem";
import Card from "../ui/card/Card";

const AvailableMeals = () => {
	const [meals, setMeals] = useState(DUMMY_MEALS);

	return (
		<section className={styles.meals}>
			<Card>
				<ul>
					{meals.map((meal) => (
						<MealItem key={meal.id} meal={meal} />
					))}
				</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
