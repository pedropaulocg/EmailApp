import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import EmailList from './screens/EmailList';
import email from './screens/email';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='EmailList' component = {EmailList} options={{headerShown: false}}/>
        <Stack.Screen name='email' component = {email} options={{title: 'Email'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


