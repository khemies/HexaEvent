import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import routes from "./routes";
import HomeScreen from "../screens/HomeScreen";
import ManagementScreen from "../screens/ManagementScreen";
import StatsScreen from "../screens/StatsScreen";
import MyTabBar from "../components/CustomTab";
import Header from "../components/Header";

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
        name={routes.MANAGEMENT}
        options={{
          header: Header,
        }}
        component={ManagementScreen}
      />
      <Tab.Screen
        name={routes.STATS}
        options={{
          header: Header,
        }}
        component={StatsScreen}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
