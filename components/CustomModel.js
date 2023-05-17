import { StyleSheet, Text, View, Modal } from "react-native";
import React, { useState } from "react";

import { adaptToHeight, adaptToWidth } from "../config/dimensions";
import { TouchableWithoutFeedback } from "react-native-web";
import AppButton from "./AppButton";
import colors from "../config/colors";

const CustomModal = ({
  animationType = "slide",
  Component = View,
  visible,
  onDismiss,
  child,
  height,
  width,
  styleModal,
}) => {
  return (
    <Modal animationType={animationType} transparent={true} visible={visible}>
      <TouchableWithoutFeedback onPress={() => onDismiss()}>
        <View style={[styles.modal, styleModal]}>
          <TouchableWithoutFeedback>
            <View
              style={[
                styles.modalInner,
                height ? { height: height } : { height: adaptToHeight(0.7) },
                width ? { width: width } : { width: adaptToWidth(0.7) },
              ]}
            >
              {child}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
      <Component />
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: colors.backdrop,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  modalInner: {
    //padding: sizes.padding,
    backgroundColor: colors.light,
  },
});
