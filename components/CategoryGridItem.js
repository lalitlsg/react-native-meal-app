import React from "react";
import { View, TouchableNativeFeedback, StyleSheet } from "react-native";
import AppText from "./AppText";

const CategoryGridItem = ({ title, color, onSelect }) => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={onSelect} style={styles.touchable}>
        <View style={{ ...styles.category, backgroundColor: color }}>
          <AppText>{title}</AppText>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    margin: 15,
    borderRadius: 5,
    overflow: "hidden",
  },
  touchable: {
    flex: 1,
  },
  category: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});

export default CategoryGridItem;
