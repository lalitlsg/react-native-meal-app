import React from "react";
import { FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";
import { useSelector } from "react-redux";

const MealList = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);
  const renderMeal = (dataItem) => {
    const isMealFavorite = favoriteMeals.some(
      (meal) => meal.id === dataItem.item.id
    );
    return (
      <MealItem
        meal={dataItem}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: dataItem.item.id,
              mealTitle: dataItem.item.title,
              isFavorite: isMealFavorite,
            },
          });
        }}
      />
    );
  };
  return <FlatList data={props.displayMeals} renderItem={renderMeal} />;
};

export default MealList;
