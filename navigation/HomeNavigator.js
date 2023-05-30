import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import AllEventsScreen from "../screens/AllEventsScreen";
import HomeScreen from "../screens/HomeScreen";

export default function HomeNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routes.ALL_EVENTS}
        component={AllEventsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
