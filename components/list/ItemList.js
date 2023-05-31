import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import React, { useState } from "react";
import { adaptToHeight, adaptToWidth } from "../../config/dimensions";
import colors from "../../config/colors";
import CustomView from "../CustomView";
import AppText from "../AppText";



const ItemList = ({ item, onPress }) => {
  const date = new Date(item?.event_actual_date);

  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();

  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        source={{
          uri: item?.image,
          headers: { Accept: "image/*" },
        }}
        contentFit="cover"
        style={styles.container}
        imageStyle={styles.container}
      >
        <CustomView style={styles.Badge}>
          <AppText style={styles.dayText}>{day}</AppText>
          <AppText style={styles.monthText}>{month}</AppText>
        </CustomView>
        <CustomView style={styles.Box}></CustomView>
        <CustomView style={styles.BottomBox}>
          <AppText style={styles.textStyle}>{item?.title}</AppText>
          <AppText style={styles.textStyle}>{item?.description}</AppText>
          <AppText style={styles.textStyle}>{item?.price} €</AppText>
        </CustomView>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  container: {
    width: adaptToWidth(0.85),
    height: adaptToHeight(0.4),
    borderRadius: adaptToHeight(0.03),

    marginBottom: adaptToHeight(0.06),
    backgroundColor: colors.white,

    alignItems: "flex-start",
    justifyContent: "flex-start",
    justifyContent: "space-around",
    padding: "5%",
  
  
  },
  Box: {
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-between",
    padding: adaptToHeight(0.01),
  },

  BottomBox: {
    width: "100%",
    height: "40%",
    alignItems: "flex-start",
    justifyContent: "center",
    justifyContent: "space-between",
    padding: adaptToHeight(0.01),
    backgroundColor: "rgba(52, 52, 52, 0.6)",
  },

  textStyle: {
    color: colors.light,
  },
  Badge: {
    width: 70,
    height: 70,
    borderRadius: adaptToWidth(0.05),
    backgroundColor: "white",
    left: adaptToWidth(0.6),
    alignItems: "center",
    justifyContent: "center",
    textAlignVertical: "top",
    backgroundColor: colors.white,
    shadowColor: colors.grey,
    shadowOffset: {
      width: 20,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  monthText: {
    fontSize: 16,
  },
  dayText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
