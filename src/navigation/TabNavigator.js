import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@ui-kitten/components';
import React from 'react';

// screens
import { Feed, Search, AddPost, Activity, Profile } from '../screens';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="home-outline" width={32} height={32} fill={focused ? '#111' : '#939393'} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="search-outline"
              width={32}
              height={32}
              fill={focused ? '#111' : '#939393'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPost}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="plus-square-outline"
              width={32}
              height={32}
              fill={focused ? '#111' : '#939393'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="heart-outline" width={32} height={32} fill={focused ? '#111' : '#939393'} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="person-outline"
              width={32}
              height={32}
              fill={focused ? '#111' : '#939393'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
