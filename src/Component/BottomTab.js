import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import Notification from '../Screen/Notification';
import Profile from '../Screen/Profile';
import Game from '../Screen/Game';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                activeTintColor: '#fff', // Color of the text for the active tab
                inactiveTintColor: 'gray', // Color of the text for inactive tabs
                activeBackgroundColor: '#CC640B', // Background color of the active tab
                inactiveBackgroundColor: 'white', // Background color of inactive tabs
            }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: tabInfo => (
                        <Entypo
                            name="home"
                            size={25}
                            style={{
                                color: tabInfo.focused ? '#fff' : '#828282',
                                backgroundColor: tabInfo.focused ? '#CC640B' : '#fff',
                                padding: 5,
                                borderRadius: 20
                            }}
                        />
                    ),
                }} />
            <Tab.Screen name="Suggestion" component={Game}
                options={{
                    tabBarIcon: tabInfo => (
                        <Ionicons
                            name="game-controller-outline"
                            size={25}
                            style={{
                                color: tabInfo.focused ? '#fff' : '#828282',
                                backgroundColor: tabInfo.focused ? '#CC640B' : '#fff',
                                padding: 5,
                                borderRadius: 20
                            }}
                        />
                    ),
                }} />
            <Tab.Screen name="Notification" component={Notification}
                options={{
                    tabBarIcon: tabInfo => (
                        <Ionicons
                            name="notifications-outline"
                            size={25}
                            style={{
                                color: tabInfo.focused ? '#fff' : '#828282',
                                backgroundColor: tabInfo.focused ? '#CC640B' : '#fff',
                                padding: 5,
                                borderRadius: 20
                            }}
                        />
                    ),
                }} />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: tabInfo => (
                        <EvilIcons
                            name="user"
                            size={25}
                            style={{
                                color: tabInfo.focused ? '#fff' : '#828282',
                                backgroundColor: tabInfo.focused ? '#CC640B' : '#fff',
                                padding: 5,
                                borderRadius: 20
                            }}
                        />
                    ),
                }} />
        </Tab.Navigator>
    )
}

export default BottomTab
