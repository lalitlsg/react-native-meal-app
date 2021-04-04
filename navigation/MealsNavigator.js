import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoriteScreen from "../screens/FavoriteScreen";

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      headerTitle: "Meal Categories",
    },
  },
  CategoryMeals: CategoryMealsScreen,
  MealDetail: MealDetailScreen,
});

const FavoriteNavigator = createStackNavigator({
  Favorite: {
    screen: FavoriteScreen,
    navigationOptions: {
      headerTitle: "Your Favorites",
    },
  },
  MealDetail: MealDetailScreen,
});

const MealFavTabNavigator = createBottomTabNavigator({
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="ios-restaurant" size={24} color={tabInfo.tintColor} />
      ),
    },
  },
  Favorites: {
    screen: FavoriteNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="ios-star" size={24} color={tabInfo.tintColor} />
      ),
    },
  },
});

export default createAppContainer(MealFavTabNavigator);
