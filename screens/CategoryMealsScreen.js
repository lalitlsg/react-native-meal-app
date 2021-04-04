import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CategoryMealsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>CategoryMealsScreen</Text>
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
