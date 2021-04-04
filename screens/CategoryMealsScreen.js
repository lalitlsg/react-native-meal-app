import React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/data";

const CategoryMealsScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");
  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMeal = (dataItem) => (
    <MealItem
      meal={dataItem}
      onSelectMeal={() => {
        props.navigation.navigate({
          routeName: "MealDetail",
          params: {
            mealId: dataItem.item.id,
          },
        });
      }}
    />
  );

  return <FlatList data={displayMeals} renderItem={renderMeal} />;
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default CategoryMealsScreen;
