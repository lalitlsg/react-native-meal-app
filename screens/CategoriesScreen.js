import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableNativeFeedback,
} from "react-native";
import AppText from "../components/AppText";
import { CATEGORIES } from "../data/categories-data";

const CategoriesScreen = (props) => {
  const renderGridCategories = (dataItem) => (
    <TouchableNativeFeedback
      onPress={() => props.navigation.navigate("CategoryMeals")}
    >
      <View style={styles.category}>
        <AppText>{dataItem.item.title}</AppText>
      </View>
    </TouchableNativeFeedback>
  );

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridCategories}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignContent: "center",
  },
  text: {
    textAlign: "center",
  },
  category: {
    flex: 1,
    height: 100,
    margin: 15,
  },
});

export default CategoriesScreen;
