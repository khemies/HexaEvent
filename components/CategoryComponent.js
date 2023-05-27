import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import { adaptToHeight, adaptToWidth } from '../config/dimensions'
import colors from '../config/colors'

export default function CategoryComponent({category , index , onPress}) {
  return (
    <TouchableOpacity  onPress={onPress} >
      <ImageBackground
        key={index}
        source={{ uri: category?.image }}
        style={styles.container}
        imageStyle={styles.container}
      >
        <AppText style={styles.title}>{category?.title}</AppText>
        <AppText style={styles.slug}>{category?.slug}</AppText>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: adaptToWidth(0.43),
    height: adaptToHeight(0.22),
    marginHorizontal: adaptToWidth(0.02),
    padding: adaptToWidth(0.08),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.light,
  },
  slug: {
    fontSize: 12,
    color: colors.light,
  },
});