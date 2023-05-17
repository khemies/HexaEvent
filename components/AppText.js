import React from "react";
import { Text, StyleSheet } from "react-native";
import defaultSyles from '../config/styles'
function AppText({ children, style,...otherProps }) {
  return <Text style={[defaultSyles.text, style]} {...otherProps}  >{children}</Text>;
}

const styles = StyleSheet.create({});



export default AppText;
