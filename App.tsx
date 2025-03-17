import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppNavigator} from './app/navigators/app-navigator';
import {colors} from './app/theme/colors';
import {SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default App;
