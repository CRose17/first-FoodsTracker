import React from "react";
import { StyleSheet, View } from "react-native";
import LogFood from "./components/LogFoodComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <LogFood />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
