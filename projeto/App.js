import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function UrnaEletronica() {
  const [votosA, setVotosA] = useState(0);
  const [votosB, setVotosB] = useState(0);
  const [votosC, setVotosC] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Painel de Botão</Text>

      {/* Candidato A */}
      <View style={styles.candidatoContainer}>
        <Text style={styles.nomeCandidato}>Candidato A: {votosA} votos</Text>
        <TouchableOpacity
          style={styles.botaoVotar}
          onPress={() => setVotosA(prev => prev + 1)}
        >
          <Text style ={styles.textoBotao}>Votar em A</Text>
        </TouchableOpacity>
      </View>

      {/* Candidato B */}
      <View style={styles.candidatoContainer}>
        <Text style={styles.nomeCandidato}>Candidato B: {votosB} votos</Text>
        <TouchableOpacity
          style={styles.botaoVotar}
          onPress={() => setVotosB(prev => prev + 1)}
        >
          <Text style ={styles.textoBotao}>Votar em B</Text>
        </TouchableOpacity>
      </View>

      {/* Candidato C */}
      <View style={styles.candidatoContainer}>
        <Text style={styles.nomeCandidato}>Candidato C: {votosC} votos</Text>
        <TouchableOpacity
          style={styles.botaoVotar}
          onPress={() => setVotosC(prev => prev + 1)}
        >
          <Text style ={styles.textoBotao}>Votar em C</Text>
        </TouchableOpacity>
      </View>
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
