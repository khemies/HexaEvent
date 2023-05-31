import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import colors from "../config/colors";
import { adaptToHeight, adaptToWidth } from "../config/dimensions";
function AppTextInput({ icon, onChange ,width = "100%",styleText,styleCOntainer, ...otherProps }) {
  const [selected, setSelected] = useState(false);
  return (
    <View
      style={[
        styles.container,
        {
          width,
          borderBottomColor: selected
            ? defaultStyles.colors.primary
            : defaultStyles.colors.greySelection,
        },styleCOntainer
      ]}
    >
      {icon && (
        <AntDesign
          name={icon}
          size={20}
          color={
            selected
              ? defaultStyles.colors.primary
              : defaultStyles.colors.greyPlaceholder
          }
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.greyPlaceholder}
        style={[defaultStyles.text, styles.text,styleText]}
        {...otherProps}
        onTouchStart={() => setSelected(!selected)}
        onChangeText={onChange}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 5,
    flexDirection: "row-reverse",
    height: adaptToHeight(0.08),

    padding: 15,
    marginVertical: adaptToHeight(0.01),
    borderBottomWidth: 1,
    borderBottomColor: defaultStyles.colors.greySelection,
  },
  icon: {
    marginRight: 10,
    top: 3,
  },
  text: {
    color: defaultStyles.colors.medium,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    textAlign: "left",
    width: "80%",
    marginHorizontal: adaptToWidth(0.02),
  },
});

export default AppTextInput;
