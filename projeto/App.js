import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function Contador(){
  const [contagem, setContagem] = useState(0);

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>"Contagem Atual:"</Text>
      <Text style={styles.titulo}>{contagem}</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setContagem(contagem + 1)}
        activeOpacity={0.7}
        >
          <Text style={styles.textoBotao}>Incrementar +1</Text>
      
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        // Se for maior que zero, diminui. Se não, fica zero
        onPress={() => setContagem((atual) => (atual > 0 ? atual - 1 : 0))}
        activeOpacity={0.7}
        >
          <Text style={styles.textoBotao}>Decrementar -1</Text>
      
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setContagem(0)}
        activeOpacity={0.7}
        >
          <Text style={styles.textoBotao}>Zerar</Text>
      
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff" 
  },
  titulo: {
    fontSize: 20,
    color: "#333333"
  },
  numero: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#4caf50",
    marginBottom: 20
  },
  botao: {
    backgroundColor: "#4caf50",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
    marginVertical: 6,
    minWidth: 200,
    alignItems: "center",
  },
  textoBotao: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  }
});