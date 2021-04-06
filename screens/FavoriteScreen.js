import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText";

import CustomHeaderButtons from "../components/CustomHeaderButtons";
import MealList from "../components/MealList";

const Fallback = () => (
  <View style={styles.fallback}>
    <Image source={require("../assets/images/meal.png")} style={styles.image} />
    <View>
      <AppText style={styles.fallbackHeader}>Hey!</AppText>
      <AppText style={styles.fallbackText}>
        You don't have any favorite meals.
      </AppText>
      <AppText style={styles.fallbackText}>Start adding some.</AppText>
    </View>
  </View>
);

const FavoriteScreen = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);
  let renderList = (
    <MealList displayMeals={favoriteMeals} navigation={props.navigation} />
  );
  if (favoriteMeals.length === 0 || !favoriteMeals) {
    renderList = <Fallback />;
  }
  return renderList;
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

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fallbackHeader: {
    fontSize: 23,
    marginBottom: 7,
    textAlign: "center",
  },
  fallbackText: {
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
});

export default FavoriteScreen;
