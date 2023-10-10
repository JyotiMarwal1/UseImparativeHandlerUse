
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../Screens/HomeScreen';
import UseImparativeExParent from '../Screens/UseImparativeExample/UseImparativeExParent';
import NavigationConstants from './NavigationConstant';
import DownloadFileScreen from '../Screens/DownloadFile/DownloadFileScreen';


const Stack = createStackNavigator();

const RootNavigator = () => {

  return (
    <Stack.Navigator
      initialRouteName={NavigationConstants.HomeScreen}
      screenOptions={{
        // headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name={NavigationConstants.UseImparativeExParent}
        component={UseImparativeExParent}
      />
      <Stack.Screen
        name={NavigationConstants.HomeScreen}
        component={HomeScreen}
      />
      <Stack.Screen
        name={NavigationConstants.DownloadFileScreen}
        component={DownloadFileScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
