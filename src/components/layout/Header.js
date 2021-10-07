import React from "react";

import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../img/meals.jpg";

const Header = (props) => {

	return (
		<>
			<header className={styles.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton />
			</header>
			<div className={styles["main-image"]}>
				<img src={mealsImage} alt="table of meals" />
			</div>
		</>
	);
};

export default Header;
