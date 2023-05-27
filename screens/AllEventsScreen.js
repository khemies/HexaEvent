import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ItemList from "../components/list/ItemList";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import CustomView from "../components/CustomView";
import colors from "../config/colors";
import { adaptToHeight, adaptToWidth } from "../config/dimensions";



export default function AllEventsScreen({data = [] , routes,...otherProps}) {
  const [searchText , setSearchText] = useState("")
  const [filtredData , setFiltredData] = useState([])

console.log(routes , "routes")
console.log(otherProps , "otherpops")

  useEffect(() => {
    
    if(searchText){
      const origData = data.filter(el => el?.title?.includes(searchText))
      setFiltredData(origData)
    }
  
  
  }, [searchText])
  
  return (
    <CustomView  style={{...styles.container}} >
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
          marginBottom : "12%",
        
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
          <AppTextInput onChange={(values) =>  setSearchText(values)} />
        </CustomView>
        <AppButton
          title="search"
          style={{ width: adaptToWidth(0.3), height: adaptToHeight(0.06),  }}
          styleText={{ fontSize: 12 }}
        />
      </CustomView>

      <FlatList
        data={filtredData.length > 0 ? filtredData : data}
        keyExtractor={({ item, index }) => index}
        renderItem={({ item }) => {
          return <ItemList item={item} />;
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
