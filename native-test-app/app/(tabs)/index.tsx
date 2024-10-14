import React from 'react';
import { Image, StyleSheet, Platform, Text } from 'react-native';
import { Home } from 'react-natives';

export default function HomeScreen() {
  return (
    <>
     <Text>I am not happy</Text>     
     <Home></Home>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
