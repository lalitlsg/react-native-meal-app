import { StatusBar } from "expo-status-bar";
import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import MealsNavigator from "./navigation/MealsNavigator";

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
