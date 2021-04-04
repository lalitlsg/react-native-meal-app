import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableNativeFeedback,
} from "react-native";
import color from "../constants/color";
import AppText from "./AppText";

const MealItem = (props) => {
  const { meal, onSelectMeal } = props;
  const { title, duration, affordability, complexity, imageUrl } = meal.item;
  return (
    <View style={styles.itemContainer}>
      <TouchableNativeFeedback onPress={onSelectMeal} useForeground={true}>
        <View style={styles.mealItem}>
          <View style={styles.itemHeader}>
            <ImageBackground source={{ uri: imageUrl }} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <AppText style={styles.title} numberOfLines={1}>
                  {title}
                </AppText>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.itemContent}>
            <AppText>{duration}m</AppText>
            <AppText>{complexity}</AppText>
            <AppText>{affordability}</AppText>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    height: 200,
    margin: 15,
    borderRadius: 5,
    overflow: "hidden",
  },
  touchable: {
    flex: 1,
  },
  mealItem: {
    flex: 1,
  },
  itemHeader: {
    height: "85%",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 5,
  },
  title: {
    color: "white",
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
  itemContent: {
    height: "15%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: color.primaryColor,
    padding: 5,
  },
});

export default MealItem;
