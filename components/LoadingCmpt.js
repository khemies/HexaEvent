import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import CustomView from "./CustomView";
import AppText from "./AppText";
import { adaptToHeight } from "../config/dimensions";
import colors from "../config/colors";

const LoadingCmpt = () => {
  return (
    <CustomView style={styles.container}>
      <AppText style={styles.text}>تحميل...</AppText>
      <ActivityIndicator size="large" color={colors.pinkLight} />
    </CustomView>
  );
};

export default LoadingCmpt;

const styles = StyleSheet.create({
  container: {
    width: adaptToHeight(0.6),
    height: adaptToHeight(0.6),

    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: adaptToHeight(0.03),
    color: colors.medium,
    margin: adaptToHeight(0.02),
  },
});
