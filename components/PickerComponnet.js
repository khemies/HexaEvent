import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { adaptToHeight, adaptToWidth } from "../config/dimensions";
import colors from "../config/colors";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import ModalCmpt from "./ModalCmpt";
import AppText from "./AppText";
import CustomView from "./CustomView";
import AppTextInput from "./AppTextInput";
import AppButton from "./AppButton";

const PickerComponnet = ({ items, onSelect, onSearchSubmit }) => {
  const [inputSearch, setInputSearch] = useState("");
  const [visible, setVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [label, setLabel] = useState("");
  useEffect(() => {
    if (onSelect) onSelect(label);
  }, [label]);
  return (
    <View style={styles.container}>
      <Ionicons
        name="search-circle"
        size={adaptToHeight(0.04)}
        color={colors.primary}
        onPress={() => setSearchVisible(true)}
      />
      <AppText style={styles.title}>{label}</AppText>
      <AntDesign
        name="downcircle"
        size={adaptToHeight(0.035)}
        color={colors.primary}
        onPress={() => setVisible(true)}
      />
      <ModalCmpt visiblity={visible}>
        {items &&
          items.map((el, index) => (
            <TouchableOpacity
              onPress={() => {
                setLabel(el.text);
                setVisible(false);
              }}
              key={index}
            >
              <CustomView style={styles.item}>
                <AppText style={[styles.apptext]}>{el.text}</AppText>
                <AntDesign
                  name={el.icon}
                  color={el.color}
                  size={adaptToHeight(0.025)}
                />
              </CustomView>
            </TouchableOpacity>
          ))}
      </ModalCmpt>
      <ModalCmpt
        visiblity={searchVisible}
        styleModal={{
          top: 0,
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0,
          borderBottomRightRadius: 25,
          borderBottomLeftRadius: 25,
        }}
      >
        <CustomView style={styles.searchModal}>
          <AppTextInput
            onChangeText={(values) => {
              setInputSearch(values);
              console.log(values);
            }}
          />
          <AppButton
            onPress={() => {
              onSearchSubmit(inputSearch);
              setSearchVisible(false);
            }}
            title="بحث"
          />
        </CustomView>
      </ModalCmpt>
    </View>
  );
};

export default PickerComponnet;

const styles = StyleSheet.create({
  container: {
    width: adaptToWidth(1),
    height: adaptToHeight(0.06),
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-between",
    padding: adaptToHeight(0.01),
    marginBottom: adaptToHeight(0.02),
  },
  item: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: adaptToHeight(0.02),
  },
  apptext: {
    fontSize: adaptToHeight(0.03),
    marginRight: adaptToHeight(0.01),
    fontSize: adaptToHeight(0.03),
    color: colors.medium,
  },
  title: {
    fontSize: adaptToHeight(0.03),
    color: colors.medium,
  },
  searchModal: {
    width: "60%",
    height: "100%",

    alignItems: "center",
    justifyContent: "center",
  },
});
