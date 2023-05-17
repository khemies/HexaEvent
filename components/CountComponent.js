import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { adaptToHeight, adaptToWidth } from "../config/dimensions";
import colors from "../config/colors";
import CustomView from "./CustomView";
import AppText from "./AppText";
import ChartBar from "../assets/chartBars.svg";
const CountComponent = ({ type, data, label, styleView, styleText }) => {
  return (
    <CustomView style={[styles.container, styleView]}>
      <CustomView style={styles.text}>
        <AppText style={[styles.type, styleText]}>{type}</AppText>
        <AppText style={[styles.data, styleText]}>{data}</AppText>
      </CustomView>

      <ChartBar width={adaptToWidth(0.15)} height={adaptToHeight(0.05)} />
    </CustomView>
  );
};

export default CountComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    width: adaptToWidth(0.4),
    height: adaptToHeight(0.25),
    borderRadius: adaptToHeight(0.02),
    margin: adaptToHeight(0.01),
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-around",
    padding: adaptToHeight(0.02),
    shadowColor: colors.grey,
    shadowOffset: {
      width: 10,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  type: {
    color: colors.white,
    fontWeight: "bold",
    marginBottom: adaptToHeight(0.01),
  },
  data: {
    color: colors.light,
    fontSize: adaptToHeight(0.03),
    flexWrap: "wrap",
  },
  label: {
    color: colors.white,
  },
  text: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
