import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox } from "react-native";
import { useFonts } from "expo-font";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { enableScreens } from "react-native-screens";

import mealsReducer from "./store/reducers/meals";
import AppLoading from "expo-app-loading";
import MealsNavigator from "./navigation/MealsNavigator";

LogBox.ignoreAllLogs();
enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  const [dataLoaded] = useFonts({
    "open-sans-pro": require("./assets/fonts/SourceSansPro-Regular.ttf"),
  });
  if (!dataLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <MealsNavigator />
      <StatusBar style="auto" />
    </Provider>
  );
}
