import { StyleSheet, View, AddButton } from "react-native";
import React , {useState , useEffect} from "react";

import EventForm from "../screens/EventForm";
import {getEvents} from "../controller/eventsApi"
import AllEventsScreen from "./AllEventsScreen";
import Modal from "../components/CustomModel"
import AppButton from "../components/AppButton";
import CustomModal from "../components/CustomModel";
import CustomView from "../components/CustomView";
import { adaptToHeight, adaptToWidth } from "../config/dimensions";

export default function MyEventsScreen(props) {
  const [events , setEvents] = useState()
  const [visible ,setVisible] = useState(false)

const handleGetEvents = async () => {
  getEvents().then(res => setEvents(res.data.results)).catch(e => console.log(e))
}
const openModal = () => setVisible(true);
const closeModal = () => setVisible(false);

useEffect(() => {
handleGetEvents()
}, [])

  return (
    <CustomView style={{height : adaptToHeight(1)}}>
      <CustomView style={{height : adaptToHeight(0.1)}} >

      <AppButton title={"Add event"} onPress={openModal} />
      </CustomView>
      <AllEventsScreen data={events} />

     

      <CustomModal  height={adaptToHeight(1)} width={adaptToWidth(1)} child={<EventForm  closeModal={closeModal} />} visible={visible} />
    </CustomView>
  );
};
const styles = StyleSheet.create({



});
