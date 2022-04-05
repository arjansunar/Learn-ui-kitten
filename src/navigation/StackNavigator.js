import React from 'react';
import { Text } from '@ui-kitten/components';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Feed } from '../screens';

const FeedNavigator = createStackNavigator();

export const FeedStack = () => {
  return (
    <NavigationContainer independent={true}>
      <FeedNavigator.Navigator>
        <FeedNavigator.Screen name="Social App" component={Feed} />
      </FeedNavigator.Navigator>
    </NavigationContainer>
  );
};
