import React, { useEffect } from "react";

import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import Card from "../ui/card/Card";
import useHTTP from "../../hooks/useHTTP";

const AvailableMeals = () => {
	const { data: meals, fetchData, isLoading, error } = useHTTP();

	useEffect(() => {
		fetchData(
			"https://react-http-b56cf-default-rtdb.firebaseio.com/meals.json"
		);
	}, [fetchData]);

	let content = (
		<ul>
			{meals.map((meal) => (
				<MealItem key={meal.id} meal={meal} />
			))}
		</ul>
	);

	if (error) {
		content = <p>{error.message}</p>;
	}

	if (isLoading) {
		content = <p>Is Loading...</p>;
	}

	return (
		<section className={styles.meals}>
			<Card>{content}</Card>
		</section>
	);
};

export default AvailableMeals;
