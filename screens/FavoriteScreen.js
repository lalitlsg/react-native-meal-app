import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButtons from "../components/CustomHeaderButtons";

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

FavoriteScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoriteScreen;
