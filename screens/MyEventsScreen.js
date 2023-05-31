import { StyleSheet, View, AddButton } from "react-native";
import React from "react";
import colors from '../config/colors'
import ImageUploaderEvent from "../components/ManagamentScreenCmpt/ImageUploaderEvent";
import EventForm from "../screens/EventForm";
import { SubmitButton } from '../components/form'
import CustomView from "../components/CustomView";
import ImageUploader from "../components/ManagamentScreenCmpt/Imageuploder";
import { ScrollView } from "react-native-web";
export default function MyEventsScreen(props) {

  return (
    <View>

      <View>
        <ImageUploaderEvent />

      </View>
     
        <View>
        <EventForm />

        </View>

      

    </View>


  );
};
const styles = StyleSheet.create({



});
