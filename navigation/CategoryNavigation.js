import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import CategoryScreen from '../screens/CategoryScreen';
import AllEventsScreen from '../screens/AllEventsScreen';
import AllEventsNavigation from './AllEventsNavigation';
import Header from '../components/Header';
import useAuth from '../Auth/useAuth';



export default function CategoryNavigation() {
    const Stack = createStackNavigator();
    const {logOut} = useAuth()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.CATEGORY}
        component={CategoryScreen}
        options={{ header: (props) => <Header {...props} logout={logOut} /> }}
      />
      <Stack.Screen
        name={routes.ALL_EVENTS}
        component={AllEventsNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}