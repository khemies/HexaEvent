import { Text, View, Button, FlexAlignType, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import AddButton from "../components/AppButton"
import CustomModal from "../components/CustomModel"
import EditScreen from "../screens/EditScreen"
import ImageUploader from '../components/ManagamentScreenCmpt/Imageuploder'
import { SubmitButton } from '../components/form'
import ProfileView from './ProfileView'
import colors from '../config/colors'
import { getItemAsync } from 'expo-secure-store'
export default function ProfileScreen() {
const [modalStatus, setModalStatus] = useState(false);


  const openModal = () => {
    setModalStatus(true);
  };

  const closeModal = () => {
    setModalStatus(false);
  };
  const confirModal = () => { };
  return (
    <View>

  <View>
  <ImageUploader/>
  <Text style={{ fontWeight:"bold",fontSize:20,textAlign:"center",color:colors}}>res.Fullname </Text>
  </View> 



  
  <ProfileView></ProfileView>
  

  
  <View>
 <AddButton title="Edit" onPress={openModal} />

</View>
     
      <CustomModal
        width="100%"
        height="100%"
        child={

          <View style={{ width: "100%", height: "100%" }}>
            <EditScreen />

            <AddButton title="Submit" onPress={closeModal} style={{
              justifyContent: "center"
            }} />

          </View>



        }

        visible={modalStatus}
      />
    </View>

);
}