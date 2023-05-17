import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthContext from "./context/AuthContext";
import AppNavigator from "./navigation/AppNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import storage from "./Auth/storage";
import useAuth from "./Auth/useAuth";

const AppContainer = () => {
  const { user, setUser } = useContext(AuthContext);
  const {loading , setLoading} = useState(false)
  const { persistlogin } = useAuth();
  
 

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppContainer;

const styles = StyleSheet.create({});
