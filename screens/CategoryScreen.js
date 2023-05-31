import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AllEventsScreen from "./AllEventsScreen";
import { getEvents } from "../controller/eventsApi";
import CustomView from "../components/CustomView";
import { getCategories } from "../controller/categoriesApi";
import AppText from "../components/AppText";
import CategoryComponent from "../components/CategoryComponent";
import { adaptToHeight, adaptToWidth } from "../config/dimensions";
import routes from "../navigation/routes";

export default function CategoryScreen(props) {
  const [events , setEvents] = useState([])
  const [categories , setCategories] = useState([])
  const [category , setCategory] = useState()
  const [filtredEvent , setFilredEvents] = useState([])

const navigate = props.navigation.navigate;

  const handleGetEvents = async () =>{
   getEvents().then(res => {
    setEvents([...res?.data.results])
    setFilredEvents([...res?.data.results]);
   }).catch(e => console.log(e))
  }

  const handleGetCategories = () => {
    getCategories().then(res => {
      setCategories(res.data.results)
      
    }).catch(e => console.log(e))
  }

  const handleFilterByCategory = () => {
    navigate(routes.ALL_EVENTS , {data :  "" })
  }

  useEffect(() => {
 handleGetCategories()
 handleGetEvents()
  
    
  }, [])

  // useEffect(() => {
  // if(category){
  //   const newEvents = events.filter( el => el?.category?.id !== category)
  //   setEvents(newEvents)
  // }
  // }, [category])
  
  return (
    <CustomView style={styles.bigContainer} >

    <CustomView style={styles.container} >
      { 
      categories.map((el, index) => (
        <CategoryComponent category={el} index={index} key={index}   navigate={navigate}/>
      ))}
    </CustomView>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  bigContainer: {
    width: adaptToWidth(1),
    height: adaptToHeight(0.8),
    alignItems: "center",
    justifyContent: "center",

  },
  container: {
    paddingTop: adaptToHeight(0.05),
    width: "98%",
  
    flexWrap: "wrap",
  },
});
