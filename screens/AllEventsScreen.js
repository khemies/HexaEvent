import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ItemList from "../components/list/ItemList";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import CustomView from "../components/CustomView";
import colors from "../config/colors";
import { adaptToHeight, adaptToWidth } from "../config/dimensions";



export default function AllEventsScreen({data = [] , route,...otherProps}) {
  const [searchText , setSearchText] = useState("")
  const [filtredData , setFiltredData] = useState([])



  useEffect(() => {
    
    if(searchText.length >3){
      console.log(searchText)
      const target_date = route?.params?.data ? route?.params?.data : data;
      console.log(target_date,"target_date")
      let origData = target_date.filter((el) =>{
        console.log(el?.title?.includes(searchText));
        return el?.title?.includes(searchText)}
      );
      console.log(searchText,origData , "origdata")
      setFiltredData(origData)
      
    }else {
      setFiltredData([])
    }
  
  
  }, [searchText, filtredData.length])



  
  return (
    <CustomView style={{ ...styles.container }}>
      <CustomView
        style={{
          backgroundColor: colors.light,
          width: "80%",
          flexDirection: "row",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "flex-start",
          height: "30%",
          paddingTop: 20,
          marginBottom: "12%",
        }}
      >
        <CustomView
          style={{
            backgroundColor: colors.light,
            width: "60%",
            alignItems: "flex-start",
            marginRight: "10%",
          }}
        >
          <AppTextInput onChange={(values) => setSearchText(values)} />
        </CustomView>
        <AppButton
          title="Filter"
          style={{ width: adaptToWidth(0.3), height: adaptToHeight(0.06) }}
          styleText={{ fontSize: 12 }}
        />
      </CustomView>

      <FlatList
        data={
          filtredData.length > 0
            ? filtredData
            : route?.params?.data
            ? route?.params.data
            : data
        }
        keyExtractor={({ item }) => {
          const itemId = item?.id;
          return itemId ? `item_${itemId}` : Math.random().toString(); 
        }}
        renderItem={({ item }) => {
          console.log(item.id, "item.id");
          return <ItemList item={item} key={item?.id} />;
        }}
      />
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-around",
  },
});
