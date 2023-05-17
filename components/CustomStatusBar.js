import { Text, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import colors from "../config/colors";
import { adaptToHeight, adaptToWidth } from "../config/dimensions";
import * as Animatable from "react-native-animatable";

const CustomStatusBar = ({
  message = "Notice the status bar",
  color = colors.lightred,
  CustomStyle,
}) => {
  return (
    <Animatable.View
      animation="fadeIn"
      style={[
        {
          backgroundColor: color,
          alignItems: "center",
          justifyContent: "center",

          height: adaptToWidth(0.1),
          width: "100%",
          borderRadius: adaptToWidth(0.01),
        },
        CustomStyle,
      ]}
    >
      <View
        style={[
          {
            backgroundColor: color,
            alignItems: "center",
            justifyContent: "center",

            height: adaptToWidth(0.1),
            width: "100%",
            borderRadius: adaptToWidth(0.01),
          },
          CustomStyle,
        ]}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: adaptToHeight(0.022),
            fontWeight: "bold",
          }}
        >
          {message}
        </Text>
        <StatusBar style="light" />
      </View>
    </Animatable.View>
  );
};

export default CustomStatusBar;

const styles = StyleSheet.create({});
