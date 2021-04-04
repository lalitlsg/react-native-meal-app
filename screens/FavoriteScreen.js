import React from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/data";

const FavoriteScreen = (props) => {
  const favoritesMeals = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );

  return (
    <MealList displayMeals={favoritesMeals} navigation={props.navigation} />
  );
};

export default FavoriteScreen;
