import { Dimensions } from "react-native";
import { adaptToHeight, adaptToWidth } from "../config/dimensions";

const { width, height } = Dimensions.get("window");

export default {
  // global sizes
  inch: adaptToWidth(0.003), // 5
  tiny: adaptToWidth(0.015), //5
  base: adaptToWidth(0.016), //8
  radius: adaptToWidth(0.025), //10
  padding: adaptToWidth(0.025), //10
  margin: adaptToWidth(0.025), //10
  border: 1.2,

  // font sizes
  h1: adaptToWidth(0.07), //26
  h2: adaptToWidth(0.055), //21
  h3: adaptToWidth(0.048), //18
  h4: adaptToWidth(0.04), //15
  h5: adaptToWidth(0.038), //12
  h6: adaptToWidth(0.034), //12
  h7: adaptToWidth(0.033), //12
  input: adaptToWidth(0.04), //15
  icon: adaptToWidth(0.04), //15

  // input
  inputHeight: adaptToHeight(0.075), //53
  inputAreaHeight: adaptToHeight(0.2), //53

  // screen
  screenPadding: adaptToWidth(0.039),

  //header
  headerHeight: adaptToHeight(0.07),
  headerSearchBoxHeight: height * 0.055,

  //modal
  modalWidth: adaptToWidth(0.8),

  // app dimensions
  width,
  height,
};
