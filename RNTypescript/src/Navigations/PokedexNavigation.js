import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Pokedex from '../Screens/Pokedex';
import Pokemon from '../Screens/Pokemon';
const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  console.log('PokedexNavigation');
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokedexScreen"
        component={Pokedex}
        options={{title: '', headerTransparent: true}}
      />
      <Stack.Screen
        name="PokemonScreen"
        component={Pokemon}
        options={{title: 'Pokemon'}}
      />
    </Stack.Navigator>
  );
}
