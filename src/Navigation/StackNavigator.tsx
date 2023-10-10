
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import UseImparativeExParent from '../Screens/UseImparativeExample/UseImparativeExParent';
import NavigationConstants from './NavigationConstant';


const Stack = createStackNavigator();

const RootNavigator = () => {

  return (
    <Stack.Navigator
      initialRouteName={NavigationConstants.UseImparativeExParent}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name={NavigationConstants.UseImparativeExParent}
        component={UseImparativeExParent}
      />

    </Stack.Navigator>
  );
};

export default RootNavigator;
