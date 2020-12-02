import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from '~/components/Icons';

import {AppStack} from '~/routes/router';

import * as theme from '~/styles/theme';

//Screens
import HomeScreen from '~/screens/Home';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'home-outline',
  },
  Basket: {
    name: 'shopping-bag-outline',
  },
  Favorites: {
    name: 'heart-outline',
  },
  History: {
    name: 'refresh-outline',
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          const {name} = icons[route.name];
          return <Icon name={name} height={size} width={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          borderTopColor: 'rgba(0, 0, 0, 0.0)',
          elevation: 0,
          height: 60,
          paddingTop: 20,
          borderBottomWidth: 10,
          borderBottomColor: theme.colors.white,
        },
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.gray,
      }}>
      <Tab.Screen name="Home" component={AppStack} options={{title: ''}} />
      <Tab.Screen
        name="Basket"
        component={HomeScreen}
        options={{
          title: '',
          tabBarBadge: 4,
          tabBarBadgeStyle: {
            backgroundColor: theme.colors.primary,
            color: theme.colors.white,
            borderWidth: 1,
            borderColor: theme.colors.white,
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={HomeScreen}
        options={{title: ''}}
      />
      <Tab.Screen name="History" component={HomeScreen} options={{title: ''}} />
    </Tab.Navigator>
  );
}
