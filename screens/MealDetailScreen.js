import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import App from "../App";

import AppText from "../components/AppText";
import CustomHeaderButtons from "../components/CustomHeaderButtons";
import { MEALS } from "../data/data";

const Title = ({ children }) => (
  <View style={styles.titleContainer}>
    <AppText style={styles.title}>{children}</AppText>
  </View>
);

const ItemList = ({ children }) => (
  <View style={styles.item}>
    <AppText>{children}</AppText>
  </View>
);

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const {
    imageUrl,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView style={styles.screen}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <AppText>{duration}</AppText>
        <AppText>{complexity}</AppText>
        <AppText>{affordability}</AppText>
      </View>
      <View style={styles.contentsContainer}>
        <Title>Ingredients</Title>
        {ingredients.map((ingredient) => (
          <ItemList key={ingredient}>{ingredient}</ItemList>
        ))}
      </View>
      <View style={styles.contentsContainer}>
        <Title>Steps</Title>
        {steps.map((step) => (
          <ItemList key={step}>{step}</ItemList>
        ))}
      </View>
    </ScrollView>
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
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  contentsContainer: {
    marginVertical: 10,
  },
  titleContainer: {
    backgroundColor: "#e5e5ff",
    alignSelf: "center",
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
    elevation: 2,
  },
  title: {
    fontSize: 20,
  },
  item: {
    marginVertical: 10,
    marginHorizontal: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d9d9d9",
    padding: 7,
  },
});

export default MealDetailScreen;
