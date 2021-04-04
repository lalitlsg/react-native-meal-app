import React from "react";
import { View, StyleSheet, Button } from "react-native";
import AppText from "../components/AppText";

const CategoryMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <AppText>CategoryMealsScreen</AppText>
      <Button
        title="go to meal details"
        onPress={() => props.navigation.navigate({ routeName: "MealDetail" })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default CategoryMealsScreen;
