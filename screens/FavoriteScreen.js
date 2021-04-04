import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FavoriteScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>FavoriteScreen</Text>
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

export default FavoriteScreen;
