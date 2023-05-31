import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import AllEventsScreen from "../screens/AllEventsScreen";
import HomeScreen from "../screens/HomeScreen";
import AllEventsNavigation from "./AllEventsNavigation";
import Header from "../components/Header";
import useAuth from "../Auth/useAuth";

export default function HomeNavigator() {
  const Stack = createStackNavigator();
  const { logOut } = useAuth();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.HOME}
        component={HomeScreen}
        options={{ header:  (props) => <Header {...props} logout={logOut} />, }}
      />
      <Stack.Screen
        name={routes.ALL_EVENTS}
        component={AllEventsNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
