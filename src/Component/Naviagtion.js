import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, } from '@react-navigation/stack';
import Home from '../Screen/Home';
import Notification from '../Screen/Notification';
import Profile from '../Screen/Profile';
import Game from '../Screen/Game';
import Joy from '../Screen/Joy';
import BottomTab from './BottomTab';
import Menu from './Menu'
import New from '../Screen/New';

const Stack = createStackNavigator();

const Naviagtion = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                initialRouteName="BottomTab"
                screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    headerShown: false,
                }}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Game' component={Game} />
                <Stack.Screen name='Notification' component={Notification} />
                <Stack.Screen name='Profile' component={Profile} />
                <Stack.Screen name='Joy' component={Joy} />
                <Stack.Screen name='BottomTab' component={BottomTab} />
                <Stack.Screen name='Menu' component={Menu} />
                <Stack.Screen name='New' component={New} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Naviagtion;