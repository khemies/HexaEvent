import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import CustomView from "./CustomView";
import AppText from "./AppText";
import { AntDesign } from "@expo/vector-icons";
import { adaptToHeight, adaptToWidth } from "../config/dimensions";
import colors from "../config/colors";
import PickerModal from "./PickerModal";
import { useFormikContext } from "formik";

const PickerBody = ({
  value = null,
  items = null,
  name = null,
  onChangeValue = null,
  containerStyle,
  contentStyle,
  textStyle,
}) => {
  const { values, setFieldValue } = useFormikContext();
  const [touched, setTouched] = useState(false);
  const [visible, setVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  useEffect(() => {
    if (value) {
      setCurrentItem(value);
      setFieldValue(name, value.value);
      console.log(values);
    } else {
      if (items) setCurrentItem(items[0]);
      if (items) setFieldValue(name, items[0].value);
      if (items) console.log(values);
    }
  }, []);
  useEffect(() => {
    if (currentItem) setFieldValue(name, currentItem.value);
    if (currentItem) console.log(values, name, currentItem.value);
  }, [currentItem]);

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={() => {
        setTouched(!touched);
        setVisible(true);
      }}
    >
      <CustomView
        style={[
          styles.content,
          {
            borderBottomColor: touched ? colors.primary : colors.greySelection,
          },
          contentStyle,
        ]}
      >
        <AppText style={[styles.text, textStyle]}>
          {currentItem ? currentItem.label : null}
        </AppText>
        <AntDesign
          name="upcircle"
          color={touched ? colors.primary : colors.greySelection}
          size={adaptToHeight(0.02)}
        />
      </CustomView>
      <PickerModal
        visiblity={visible}
        children={
          <CustomView style={styles.childModal}>
            {items
              ? items.map((item) => (
                  <TouchableOpacity
                    onPress={() => {
                      setCurrentItem(item);
                      setFieldValue(name, item.value);
                      setVisible(false);
                    }}
                  >
                    <AppText style={styles.item}>{item.label}</AppText>
                  </TouchableOpacity>
                ))
              : null}
          </CustomView>
        }
      />
    </TouchableOpacity>
  );
};

export default PickerBody;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "7%",
  },
  content: {
    paddingHorizontal: adaptToWidth(0.02),
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: colors.greyPlaceholder,
    height: "100%",
    padding: adaptToHeight(0.01),
  },
  text: {
    color: colors.medium,
  },
  childModal: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  item: {
    margin: adaptToHeight(0.01),
    color: colors.medium,
  },
});
