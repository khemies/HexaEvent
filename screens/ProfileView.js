import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';
import AppText from '../components/AppText';
import ProfileItem from '../components/ProfileItem';
import { adaptToWidth } from '../config/dimensions';
const CustomComponent = ({profile}) => {
  console.log(profile)
  return (
    <View style={styles.container}>
      <ProfileItem
        icon={"user"}
        label={"full name"}
        data={profile?.full_name}
        iconColor={colors.primary}
      />
      <ProfileItem
        icon={"mail"}
        label={"mail"}
        data={profile?.user?.email}
        iconColor={colors.primary}
      />
      <ProfileItem
        icon={"phone"}
        label={"phone"}
        data={profile?.user?.phone}
        iconColor={colors.primary}
      />
      <ProfileItem
        icon={"user"}
        label={"username"}
        data={profile?.user?.username}
        iconColor={colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: "60%",
    marginVertical:20,
   alignItems : "flex-start",
    justifyContent : "flex-start",
   backgroundColor : colors.white,
   padding : adaptToWidth(0.05),
   borderRadius : adaptToWidth(0.05)
   
 
    
  },
 textform :{
 fontWeight:"bold",
 fontSize:20,
 marginTop:20,
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

