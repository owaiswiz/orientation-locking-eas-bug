import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

const landscape = async () => {
  await ScreenOrientation.unlockAsync()
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
}

const portrait = async () => {
  await ScreenOrientation.unlockAsync()
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
}

export default function App() {
  return (
    <View style={styles.container}>
      <Button title='Lock to landscape' onPress={landscape}></Button>
      <Button title='Lock to portrait' onPress={portrait}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
