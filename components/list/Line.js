import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomView from "../CustomView";
import colors from "../../config/colors";

const Line = ({ style }) => {
  return <CustomView style={[styles.container, style]}></CustomView>;
};

export default Line;

const styles = StyleSheet.create({
  container: {
    height: "1%",
    width: "100%",
    backgroundColor: colors.medium,
  },
});
