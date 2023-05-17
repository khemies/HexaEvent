import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Modal } from "react-native";
import { TouchableWithoutFeedback } from "react-native-web";
import colors from "../config/colors";
import { adaptToHeight, adaptToWidth } from "../config/dimensions";

const ModalCmpt = ({ visiblity, toggleModal, styleModal, children }) => {
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
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    height: adaptToHeight(0.3),
    alignItems: "center",
    elevation: 10,

    paddingLeft: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
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

export default ModalCmpt;
