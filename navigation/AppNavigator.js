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
import useAuth from "../Auth/useAuth";
import MyEventsScreen from "../screens/MyEventsScreen";

const AppNavigator = () => {
  const { logOut } = useAuth();
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen
        name={routes.HOME}
        component={HomeScreen}
        options={{
          header: (props) => <Header {...props} logout={logOut} />,
        }}
      />
      <Tab.Screen
        name={routes.CATEGORY}
        options={{
          header: (props) => <Header {...props} logout={logOut} />,
        }}
        component={CategoryScreen}
      />
      <Tab.Screen
        name={routes.PROFILE}
        options={{
          header: (props) => <Header {...props} logout={logOut} />,
        }}
        component={ProfileScreen}
      />
      <Tab.Screen
        name={routes.MY_EVENTS}
        options={{
          header: (props) => <Header {...props} logout={logOut} />,
        }}
        component={MyEventsScreen}
      />
 
    </Tab.Navigator>
  );
};

export default AppNavigator;


