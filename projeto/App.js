import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function UrnaEletronica() {
  const [votosA, setVotosA] = useState(0);
  const [votosB, setVotosB] = useState(0);
  const [votosC, setVotosC] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Painel de Botão</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#14325A"
  },
});
