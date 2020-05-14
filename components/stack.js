import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import React from 'react';

import List from './list';
import Description from './description';
import Splash from './splash';

const AppNavigator = createStackNavigator(
    {
        List: {
            screen: List,
            navigationOptions: () => ({
                headerShown: false,
              }),
        },
        Description: {
            screen: Description
        },
        Splash: {
            screen: Splash,
            navigationOptions: () => ({
                headerShown: false,
              }),
        }
    },
    {
        initialRouteName: 'Splash'
    },
);

const Stack = createAppContainer(AppNavigator);
export default Stack;
