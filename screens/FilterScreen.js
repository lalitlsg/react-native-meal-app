import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";

import AppText from "../components/AppText";
import CustomHeaderButtons from "../components/CustomHeaderButtons";
import { setFilters } from "../store/actions/meals";

const SwitchContainer = ({ title, value, onChange }) => (
  <View style={styles.switchContainer}>
    <AppText>{title}</AppText>
    <Switch value={value} onValueChange={onChange} />
  </View>
);

const FilterScreen = (props) => {
  const initialState = false;
  const [isGlutenFree, setIsGlutenFree] = useState(initialState);
  const [isVegan, setIsVegan] = useState(initialState);
  const [isVegetarian, setIsVegetarian] = useState(initialState);
  const [isLactoseFree, setIsLactoseFree] = useState(initialState);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      isGlutenFree,
      isVegan,
      isVegetarian,
      isLactoseFree,
    };
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isVegan, isVegetarian, isLactoseFree, dispatch]);

  useEffect(() => {
    props.navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <SwitchContainer
        title="Gluten Free"
        value={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <SwitchContainer
        title="Vegan"
        value={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <SwitchContainer
        title="Vegetarian"
        value={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      />
      <SwitchContainer
        title="Lactose Free"
        value={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
    </View>
  );
};

FilterScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Filter Meals",
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>
        <Item
          title="Checkmark"
          iconName="checkmark"
          onPress={navigationData.navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    alignSelf: "center",
    marginVertical: 15,
  },
});

export default FilterScreen;
