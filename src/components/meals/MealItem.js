import React from "react";

import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
	const { meal } = props;

	return (
		<li className={styles.meal}>
			<div>
				<h3>{meal.name}</h3>
				<div className={styles.description}>{meal.description}</div>
				<div className={styles.price}>
					{`$${meal.price.toFixed(2)}`}
				</div>
			</div>
			<MealItemForm meal={meal} />
		</li>
	);
};

export default MealItem;
