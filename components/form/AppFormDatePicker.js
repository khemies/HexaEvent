import { Platform, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Fontisto } from "@expo/vector-icons";
import AppTextInput from "../AppTextInput";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import  AppFormLabel  from "./AppFormLabel";
import colors from "../../config/colors";
import { useFormikContext } from "formik";
import moment from "moment";
import sizes from "../../constants/sizes";

const AppFormDatePicker = ({
    iconName,
  autoinput,
  autoInputName,
  name,
  containerStyle,
  inputStyle,
  labelStyle,
  label,
  required = false,
  mode = "date",
  lang,
  ...otherProps
}) => {
  const { handleChange, setFieldValue, values } = useFormikContext();

  const [show, setShow] = useState(false);

  const formatDate = (date) => {
    return moment(date).format("YYYY-MM-DD");
  };

  const formatTime = (date) => {
    return moment(date).format("HH:mm:ss");
  };

  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === "ios");
    if (mode === "date") {
      setFieldValue(name, String(formatDate(selectedDate)));
      if (autoinput) setFieldValue(autoInputName, selectedDate);
    } else {
      setFieldValue(name, String(formatTime(selectedDate)));
    }
  };

  return (
    <View style={containerStyle}>
      <AppFormLabel
        name={label}
        required={required}
        style={[labelStyle]}
        lang={lang}
      />
      <View style={[{ flexDirection: "row", alignItems : "center" , justifyContent : "center" }]}>
        <View style={styles.icon}>
          <Fontisto
            name={iconName}
            size={30}
            onPress={() =>{ 
              console.log("clicked")
              setShow(!show)}}
            color={colors.white}
          />
        </View>
        <AppTextInput
          name={name}
          placeholder={mode === "date" ? "yyyy-mm-dd" : "hh:mm"}
          styleText={[{ width: "70%" }, inputStyle]}
          styleCOntainer={{ width: "70%" }}
          onChangeText={handleChange(name)}
          value={values[name]}
          lang={lang}
          {...otherProps}
        />
        {show && (
          <RNDateTimePicker
            testID="dateTimePicker"
            value={new Date(Date.now())}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor: colors.primary,
    height: sizes.inputHeight,
    alignItems: "center",
    justifyContent: "center",
    width : "20%" ,

  },
});

export default AppFormDatePicker;
