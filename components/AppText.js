import React from "react";
import { Text, StyleSheet } from "react-native";

const AppText = (props) => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans-pro",
    fontSize: 18,
  },
});

export default AppText;
