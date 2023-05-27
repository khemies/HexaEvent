import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import routes from "./routes";
import HomeScreen from "../screens/HomeScreen";
import ManagementScreen from "../screens/AllEventsScreen";
import StatsScreen from "../screens/ProfileScreen";
import MyTabBar from "../components/CustomTab";
import Header from "../components/Header";
import AllEventsScreen from "../screens/AllEventsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CategoryScreen from "../screens/CategoryScreen";
import MyEventsScreen from "../screens/MyEventsScreen";
const AppNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen
        name={routes.HOME}
        component={HomeScreen}
        options={{
          header: Header,
        }}
      />
      <Tab.Screen
        name={routes.CATEGORY}
        options={{
          header: Header,
        }}
        component={CategoryScreen}
      />
      <Tab.Screen
        name={routes.PROFILE}
        options={{
          header: Header,
        }}
        component={ProfileScreen}
      />
      <Tab.Screen
        name={routes.MY_EVENTS}
        options={{
          header: Header,
        }}
        component={MyEventsScreen}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
