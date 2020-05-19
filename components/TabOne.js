import React from 'react';
import { StyleSheet, View, Button, Alert, Text } from 'react-native';

export default class TabOne extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Tu es sur l'onglet 1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});