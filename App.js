import { StatusBar } from "expo-status-bar";
import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import MealsNavigator from "./navigation/MealsNavigator";
import { enableScreens } from "react-native-screens";

enableScreens();

export default function App() {
  const [dataLoaded] = useFonts({
    "open-sans-pro": require("./assets/fonts/SourceSansPro-Regular.ttf"),
  });
  if (!dataLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <MealsNavigator />
      <StatusBar style="auto" />
    </>
  );
}
