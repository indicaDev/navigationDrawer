import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/HomeScreen';
import { NotificationsScreen } from '../screens/NotificationsScreen';

const Drawer = createDrawerNavigator();

export function Router() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerTintColor: '#fff',
                drawerActiveTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#9728AD',
                },
                drawerStyle: {
                    backgroundColor: '#9728AD',
                },
                drawerInactiveTintColor: '#fff',
            }}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>
    );
}