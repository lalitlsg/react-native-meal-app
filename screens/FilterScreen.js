import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";

const FilterScreen = () => {
  return (
    <View style={styles.screen}>
      <AppText>FilterScreen</AppText>
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

export default FilterScreen;
