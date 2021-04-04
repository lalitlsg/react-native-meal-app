import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";

const MealDetailScreen = () => {
  return (
    <View style={styles.screen}>
      <AppText>MealDetailScreen</AppText>
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

export default MealDetailScreen;
