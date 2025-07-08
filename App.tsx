import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.innerContainer}>
          <Text>Pramod</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'green',
  },
  innerContainer: {
    flex: 1,
    paddingLeft: 40,
  },
});

export default App;
