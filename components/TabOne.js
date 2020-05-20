import React from "react";
import { StyleSheet, View, Button, Alert, Text } from "react-native";

function TabOne() {
  return (
    <View style={styles.container}>
      <Text>Waouh !! First try to create a Mobile App !! it's the first Tab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TabOne;
