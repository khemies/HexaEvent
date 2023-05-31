import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomView from './CustomView'
import {AntDesign} from "@expo/vector-icons"
import AppText from './AppText'
import colors from '../config/colors'
import { adaptToHeight, adaptToWidth } from '../config/dimensions'

const ProfileItem = ({container , labelContainer ,  icon , iconColor , label , data , labelstyle , dataStyle}) => {
  return (
    <CustomView style={[styles.container, container]}>
      <CustomView style={[styles.labelContainer, labelContainer]}>
        <AntDesign name={icon} size={20} color={iconColor} />
        <AppText style={[styles.labelstyle, labelstyle]}>{label}</AppText>
      </CustomView>
      <AppText style={[styles.datastyle, dataStyle]}>{data}</AppText>
    </CustomView>
  );
}

export default ProfileItem

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginVertical : adaptToHeight(0.01)
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "50%",
  
  },
  labelstyle : {color : colors.primary , fontSize : 18 , fontWeight : "bold", marginHorizontal : adaptToWidth(0.02)},
  datastyle : {color : colors.medium , fontSize : 18 , marginLeft : adaptToWidth(0.1)}
});