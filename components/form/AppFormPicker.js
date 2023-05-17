import React, { useState } from "react";
import { useFormikContext } from "formik";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
import defaultStyles from "../../config/styles";
import colors from "../../config/colors";
import ErrorMessage from "./ErrorMessage";
import { adaptToHeight, adaptToWidth } from "../../config/dimensions";

function AppFormPicker({
  items = [],
  placeholder,
  style,
  name,
  enabled,
  lang,
  onChange = () => {},
}) {
  const {
    setFieldTouched,
    handleChange,
    errors,
    touched,
    setFieldValue,
    values,
  } = useFormikContext();

  const [hide, setHide] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const setValue = (name, value) => {
    setFieldValue(name, value);
  };

  return (
    <>
      <Picker
        enabled={enabled}
        onValueChange={(value, itemIndex) => {
          setValue(name, value);
          onChange(value, setValue); // useful only for new internal (action)
        }}
        selectedValue={values[name]}
        style={[styles.picker, style]}
      >
        {items.map((item) => (
          <Picker.Item
            style={defaultStyles.text}
            key={item.value}
            label={item.label}
            value={item.value}
          />
        ))}
      </Picker>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  picker: {
    backgroundColor: colors.light,
    marginBottom: adaptToHeight(0.01),
  },
});

export default AppFormPicker;
