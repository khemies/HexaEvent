import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomView from "./CustomView";
import AppText from "./AppText";
import { adaptToHeight, adaptToWidth } from "../config/dimensions";
import colors from "../config/colors";

const CountRectComponent = ({ title, description, style, Icon }) => {
  return (
    <CustomView style={[styles.welcome, style]}>
      <CustomView style={styles.textBox}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.description}>{description}</AppText>
      </CustomView>
      <CustomView>
        <Icon width={adaptToWidth(0.2)} height={adaptToHeight(0.1)} />
      </CustomView>
    </CustomView>
  );
};

export default CountRectComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    width: adaptToWidth(0.85),
    height: adaptToHeight(0.15),
    borderRadius: adaptToHeight(0.02),

    marginBottom: adaptToHeight(0.02),
    backgroundColor: colors.white,
    shadowColor: colors.grey,
    shadowOffset: {
      width: 10,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
    flexDirection: "row-reverse",
    alignItems: "flex-start",
    justifyContent: "center",
    justifyContent: "space-around",
    padding: adaptToHeight(0.02),
  },
  title: {
    fontSize: adaptToHeight(0.04),
    alignSelf: "flex-end",
    color: colors.grey,
  },
  description: {
    marginBottom: adaptToHeight(0.02),
    fontSize: adaptToHeight(0.026),
    alignSelf: "flex-end",
    color: colors.greyPlaceholder,
    fontWeight: "bold",
  },
  textBox: {
    alignSelf: "flex-end",
  },
});
