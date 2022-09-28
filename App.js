import "react-native-gesture-handler"
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigations/Navigation';

export default function App() {
  console.log("asdasdas")
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  );
}