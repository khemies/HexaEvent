import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import routes from "./routes";
import HomeScreen from "../screens/HomeScreen";
import ManagementScreen from "../screens/AllEventsScreen";
import StatsScreen from "../screens/ProfileScreen";
import MyTabBar from "../components/CustomTab";
import Header from "../components/Header";
import AllEventsScreen from "../screens/AllEventsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CategoryScreen from "../screens/CategoryScreen";
import useAuth from "../Auth/useAuth";
import MyEventsScreen from "../screens/MyEventsScreen";
import CategoryNavigation from "./CategoryNavigation";
import HomeNavigator from "./HomeNavigator";
import LocationContext from "../context/LocationContext";

const AppNavigator = () => {
  const { logOut } = useAuth();
   const {Position , setPosition} = useContext(LocationContext)
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen
        name={routes.HOME_NAV}
        component={HomeNavigator}
        options={{
          headerShown : false
        }}
      />
      <Tab.Screen
        name={routes.CATEGORY_NAV}
        options={{
          headerShown :false
        }}
        component={CategoryNavigation}
      />
      <Tab.Screen
        name={routes.PROFILE}
        options={{
          header: (props) => <Header {...props} logout={logOut} />,
        }}
        component={ProfileScreen}
      />
      <Tab.Screen
        name={routes.EVENTS_NAV}
        options={{
          header: (props) => <Header {...props} logout={logOut} />,
        }}
        component={MyEventsScreen}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;


