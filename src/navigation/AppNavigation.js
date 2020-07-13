import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import { MainScreen } from "../screens/MainScreen"
import { SelectedPhotoScreen } from "../screens/SelectedPhotoScreen"



const Stack = createStackNavigator();

 const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="SelectedPhoto" component={SelectedPhotoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default  AppNavigation