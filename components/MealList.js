import React from "react";
import { FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

const MealList = (props) => {
  const renderMeal = (dataItem) => (
    <MealItem
      meal={dataItem}
      onSelectMeal={() => {
        props.navigation.navigate({
          routeName: "MealDetail",
          params: {
            mealId: dataItem.item.id,
            mealTitle: dataItem.item.title,
          },
        });
      }}
    />
  );
  return <FlatList data={props.displayMeals} renderItem={renderMeal} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default MealList;
