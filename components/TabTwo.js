import React from "react";
import { StyleSheet, View, Button, Alert, Text } from "react-native";

function TabTwo() {
  return (
    <View style={styles.container}>
      <Text>Second Tab just add another one like the singer, Try the Third Tab to use a Special stuff</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
});

export default TabTwo;
