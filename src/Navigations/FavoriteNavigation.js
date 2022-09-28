import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Favorite from '../Screens/Favorite';

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FavoriteScreen" component={Favorite} options={{title:"Favoritos"}}/>
    </Stack.Navigator>
  )
}