import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Account from '../Screens/Favorite';

const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AccountScreen" component={Account} options={{title:"Account"}}/>
    </Stack.Navigator>
  )
}