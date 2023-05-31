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
import LocationContext from "./context/LocationContext";
import useLocation from "./hooks/useLocation";
import DetailScreen from "./screens/DetailScreen";

const AppContainer = () => {
  const { user, setUser } = useContext(AuthContext);
  const { persistlogin , Loading} = useAuth();
  const {Position , setPosition} = useContext(LocationContext)
  const { LoadingLocation } = useLocation(setPosition);
  
 

   useEffect(() => {
     persistlogin();
   }, []);

   if(Loading ){
    return <LoadingComponent/>
   }
   else{
  return (
<<<<<<< HEAD
    <NavigationContainer>
     <AppNavigator />
    </NavigationContainer>
=======
      <NavigationContainer>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
>>>>>>> 2cc03c5992e86aa59580637c0b172de0cad4dd55
  );
 
   }


};

export default AppContainer;

const styles = StyleSheet.create({});
