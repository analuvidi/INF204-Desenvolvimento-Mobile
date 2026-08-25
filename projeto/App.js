import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function App(){
  return (
    <View style={StyleSheet.container}>
      <Text style={StyleSheet.texto}>"Ola, Turma de ADS306!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0f7fa"
  },
  texto: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00695c"
  }
});