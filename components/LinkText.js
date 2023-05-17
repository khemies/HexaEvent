import { StyleSheet, Text, View  , TouchableOpacity} from 'react-native'
import React from 'react'
import CustomView from './CustomView'
import AppText from './AppText';
import defaultSyles from "../config/styles"

export default function LinkText({children , text , onPress , style , textStyle}) {
  return (
    <TouchableOpacity onPress={onPress} style={[ style]}>
      <CustomView>
        <AppText style={[defaultSyles.text,textStyle]} >{children}</AppText>
      </CustomView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({})