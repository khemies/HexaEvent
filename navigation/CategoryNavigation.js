import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import CategoryScreen from '../screens/CategoryScreen';
import AllEventsScreen from '../screens/AllEventsScreen';



export default function CategoryNavigation() {
    const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.CATEGORY}
        component={CategoryScreen}
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