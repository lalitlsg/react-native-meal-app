import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import CustomHeaderButtons from "../components/CustomHeaderButtons";
import MealList from "../components/MealList";

const FavoriteScreen = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);
  return (
    <MealList displayMeals={favoriteMeals} navigation={props.navigation} />
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
