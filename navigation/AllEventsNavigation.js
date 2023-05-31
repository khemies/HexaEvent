import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import CategoryScreen from "../screens/CategoryScreen";
import AllEventsScreen from "../screens/AllEventsScreen";
import DetailScreen from "../screens/DetailScreen";

export default function AllEventsNavigation(props) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.ALL_EVENTS}
  
        options={{ headerShown: true }}
        children={() => <AllEventsScreen {...props} />}
      />
      <Stack.Screen
        name={routes.DETAIL}
        component={DetailScreen}
        options={{ headerShown: true }}
 
      />
    </Stack.Navigator>
  );
}
