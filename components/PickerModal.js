import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Modal } from "react-native";
import { TouchableWithoutFeedback } from "react-native-web";
import colors from "../config/colors";
import { adaptToHeight, adaptToWidth } from "../config/dimensions";

const PickerModal = ({ visiblity, toggleModal, styleModal, children }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visiblity}
      onRequestClose={() => {
        toggleModal();
      }}
    >
      <View style={styles.modal}>
        <TouchableWithoutFeedback>
          <View style={[styles.container, styleModal]}>{children}</View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: adaptToHeight(0.02),
    width: adaptToWidth(0.8),
    height: adaptToHeight(0.3),
    alignItems: "center",
    elevation: 10,

    paddingLeft: 20,
    position: "absolute",
    bottom: adaptToHeight(0.4),
    left: adaptToWidth(0.1),
    right: 0,
  },
  modal: {
    backgroundColor: colors.backdrop,
    width: adaptToWidth(1),
    height: adaptToHeight(1),
  },

  textButton: {
    fontSize: 13,
    color: "black",
  },
});

export default PickerModal;
