import 'react-native-gesture-handler';
import React from 'react';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigations/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}