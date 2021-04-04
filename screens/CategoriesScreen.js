import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CategoriesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>CategoriesScreen</Text>
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

export default CategoriesScreen;
