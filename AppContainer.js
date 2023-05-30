import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthContext from "./context/AuthContext";
import AppNavigator from "./navigation/AppNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import useAuth from "./Auth/useAuth";
import LoadingComponent from "./components/Loading"
import useLocation from "./hooks/useLocation";
import LocationContext from "./context/LocationContext";

const AppContainer = () => {
  const { user, setUser } = useContext(AuthContext);
  const { persistlogin , Loading} = useAuth();
  const {LoadingLocation} = useLocation()
  const {position , setPosition } = useContext(LocationContext)
  
 

   useEffect(() => {
     persistlogin();
   }, []);

   if(Loading ){
    console.log(Loading , "loading")
    return <LoadingComponent/>
   }
   
//    else if (LoadingLocation){
// console.log(LoadingLocation, "LoadingLocation");
// return <LoadingComponent />;
//    }
   else{
  return (
    <NavigationContainer value={{ position, setPosition }}>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
   }


};

export default AppContainer;

const styles = StyleSheet.create({});
