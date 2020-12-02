import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '~/screens/Home';
import DetailScreen from '~/screens/Detail';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export {AppStack};
