import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import color from "../constants/color";

const CustomHeaderButtons = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={color.primaryColor}
    />
  );
};

export default CustomHeaderButtons;
