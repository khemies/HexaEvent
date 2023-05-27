import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import CustomView from "./CustomView";
import colors from "../config/colors";
import { adaptToHeight } from "../config/dimensions";
import AppText from "./AppText";
import { AntDesign } from "@expo/vector-icons";
import useAuth from "../Auth/useAuth";

const Header = (props) => {


  return (
    <CustomView
      style={{
        backgroundColor: colors.primary,
        width: "100%",
        height: adaptToHeight(0.12),

        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      <CustomView
        style={{
          backgroundColor: colors.primary,
          width: "60%",
          height: adaptToHeight(0.08),
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          justifyContent: "space-between",

          marginTop: adaptToHeight(0.025),
        }}
      >
        <AppText
          style={{
            marginTop: adaptToHeight(0.025),
            fontSize: adaptToHeight(0.025),
            color: colors.white,
            fontWeight: "bold",
            fontFamily: "NeoSansArabic",
          }}
        >
          {props.route.name}
        </AppText>
        <AntDesign
          name="logout"
          size={adaptToHeight(0.025)}
          style={{ margin: adaptToHeight(0.02) }}
          color={colors.white}
          onPress={() => props?.logout()}
        />
      </CustomView>
    </CustomView>
  );
};

export default Header;

const styles = StyleSheet.create({});
