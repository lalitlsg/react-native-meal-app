import React from "react";
import { StyleSheet, FlatList } from "react-native";
import CategoryGridItem from "../components/CategoryGridItem";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { CATEGORIES } from "../data/data";
import CustomHeaderButtons from "../components/CustomHeaderButtons";

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

CategoriesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Meal Categories",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
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
