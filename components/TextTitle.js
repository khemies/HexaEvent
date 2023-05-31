import React from "react";
import { Text} from "react-native";
import defaultSyles from '../config/styles'
import { StyleSheet } from "react-native";



function TextTitle({ children, style,...otherProps }) {

  return (
    <Text
      style={[
        defaultSyles.text,
        styles.textTitle,
        style,

      ]}
      {...otherProps}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
    textTitle:{
        color: defaultSyles.colors.white,
        fontSize: 28,
      
        margin:10,
       
    }
})

export default TextTitle;
