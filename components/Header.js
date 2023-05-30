import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import CustomView from "./CustomView";
import colors from "../config/colors";
import { adaptToHeight, adaptToWidth } from "../config/dimensions";
import AppText from "./AppText";
import { AntDesign } from "@expo/vector-icons";
import useAuth from "../Auth/useAuth";
import routes from "../navigation/routes";
import { useSelector } from "react-redux";
import LocationContext from "../context/LocationContext";

const Header = (props) => {
  const currentScreen = props.route.name 
  const {position , setPosition} = useContext(LocationContext)
  // let currentPosition = useSelector(
  //   (state) => state.location.nonConvertedLocation
  // );
  return (
    <CustomView
      style={{
        backgroundColor:
          currentScreen == routes.HOME ? colors.yellowFlash : colors.white,
        width: "100%",
        height: adaptToHeight(0.12),
        color: colors.primary,
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      <CustomView
        style={{
          backgroundColor:
            currentScreen == routes.HOME ? colors.yellowFlash : colors.white,
          width: "80%",
          height: adaptToHeight(0.08),
          color: colors.primary,
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          justifyContent: "space-between",

          marginTop: adaptToHeight(0.025),
          padding : adaptToWidth(0.01) ,
 
        }}
      >
        <AppText
          style={{
            marginTop: adaptToHeight(0.025),
            fontSize: adaptToHeight(0.025),
            color: colors.primary,
            fontWeight: "bold",
            fontFamily: "NeoSansArabic",
          }}
        >
          {currentScreen == routes.HOME
            ? `${position?.city}, ${position?.residential}`
            : routes.name}
        </AppText>
        <AntDesign
          name="logout"
          size={adaptToHeight(0.029)}
          style={{ margin: adaptToHeight(0.018) }}
          color={colors.primary}
          onPress={() => props?.logout()}
        />
      </CustomView>
    </CustomView>
  );
};

export default Header;

const styles = StyleSheet.create({});
