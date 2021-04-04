import React from "react";
import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/data";

const CategoryMealsScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");
  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList displayMeals={displayMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const { title: categoryTitle } = CATEGORIES.find(
    (category) => category.id === categoryId
  );
  return {
    headerTitle: categoryTitle,
  };
};

export default CategoryMealsScreen;
