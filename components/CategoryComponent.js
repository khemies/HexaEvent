import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React , {useState} from 'react'
import AppText from './AppText'
import { adaptToHeight, adaptToWidth } from '../config/dimensions'
import colors from '../config/colors'
import routes from '../navigation/routes'
import { getEvents } from '../controller/eventsApi'



export default function CategoryComponent({category , index ,  navigate}) {

  

  const handleOnPress = () => {
    getEvents()
      .then((res) => {
     
        navigate(routes.ALL_EVENTS, { data: [...res?.data.results.filter( el => el?.category?.id == category?.id)] });
      })
      .catch((e) => console.log(e));
  }
  return (
    <TouchableOpacity  onPress={handleOnPress} >
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
    fontSize: 18,
    fontWeight: "bold",
    color: colors.light,
  },
  slug: {
    fontSize: 12,
    color: colors.light,
  },
});