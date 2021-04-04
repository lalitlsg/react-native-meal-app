import React from "react";
import { StyleSheet, FlatList } from "react-native";
import CategoryGridItem from "../components/CategoryGridItem";
import { CATEGORIES } from "../data/data";

const CategoriesScreen = (props) => {
  const renderGridCategories = (dataItem) => (
    <CategoryGridItem
      title={dataItem.item.title}
      color={dataItem.item.color}
      onSelect={() =>
        props.navigation.navigate({
          routeName: "CategoryMeals",
          params: {
            categoryId: dataItem.item.id,
          },
        })
      }
    />
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
});

export default CategoriesScreen;
