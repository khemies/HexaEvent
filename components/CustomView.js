import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomView = ({ style, children }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default CustomView;

const styles = StyleSheet.create({
  container: {},
});
