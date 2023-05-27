import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';
const CustomComponent = () => {
  return (
    <View style={styles.container}>
<View>
<Text style={styles.textform}>Username</Text>
      <Text style={styles.answertextform}>myusername </Text>

</View>
      
      <Text style={styles.textform}> fullname </Text>
      <Text style={styles.answertextform}> my fullname </Text>
      <Text style={styles.textform}>email</Text>
      <Text  style={styles.answertextform}>myemail@mail.com</Text>

      <Text style={styles.textform}>Phone </Text>
      <Text>+3398224763 </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 350,
    marginTop:20,
    alignContent:'center',
    alignSelf: "center",
    backgroundColor: '#c5c5c5',
    borderRadius: 20,
    
  },
 textform :{
 fontWeight:"bold",
 fontSize:20,
 marginTop:25,
 marginLeft:60,
 color:colors.primary,
 },
 answertextform :{

  fontSize:15,
  marginTop:10,
  marginLeft:30,
  color:colors.greySelection,
  },
});

export default CustomComponent;

