import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Login from '../pages/Login';
import EventsMap from '../pages/EventsMap';
import { AuthenticationContext, AuthenticationContextObject } from '../context/AuthenticationContext';
import { Users } from '../types/Users';

export default function Routes() {
    const [authenticatedUser, setAuthenticatedUser] = useState<Users>();

    const authenticationContextObj: AuthenticationContextObject = {
        value: authenticatedUser as Users,
        setValue: setAuthenticatedUser,
    };

    return (
        <AuthenticationContext.Provider value={authenticationContextObj}>
            <NavigationContainer>
                <Navigator
                    screenOptions={{
                        headerShown: false,
                        cardStyle: { backgroundColor: '#F2F3F5' },
                    }}
                >
                    <Screen name="Login" component={Login} />

                    <Screen name="EventsMap" component={EventsMap} />
                </Navigator>
            </NavigationContainer>
        </AuthenticationContext.Provider>
    );
}
