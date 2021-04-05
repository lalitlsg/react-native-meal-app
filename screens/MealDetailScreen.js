import React from "react";
import { View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import AppText from "../components/AppText";
import CustomHeaderButtons from "../components/CustomHeaderButtons";
import { MEALS } from "../data/data";

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <AppText>MealDetailScreen</AppText>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const { title } = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>
        <Item
          title="Fav"
          iconName="ios-star"
          onPress={() => {
            console.log("Fav");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default MealDetailScreen;
