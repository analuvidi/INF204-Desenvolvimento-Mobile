import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";

export default function App() {
  const [nome, setNome] = useState("Ana Luiza");
  const [seguindo, setSeguindo] = useState(false);
  return(
    <View style={styles.container}>
      <View style={styles.cartao}>
        <Image
          source={{ uri: "https://imgs.search.brave.com/86qNcvR2VYjPouUTE6vJHIh-DRqpXfqLuShAAFpfQBY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/aXMtdGhlcmUtYS1z/b3VyY2UtZm9yLXRo/ZXNlLTNkLWNnaS1l/bW9qaXMtdjAtb3M5/Nm96Y245a29mMS5w/bmc_d2lkdGg9NTEy/JmZvcm1hdD1wbmcm/YXV0bz13ZWJwJnM9/N2EyMjAzNzlkOWNk/YTM2YmUwYjE3ZjRl/MTc0N2JiOTlkNWU5/NjhhNw"}}
          style={styles.avatar}
        />
        <Text style={styles.nomeUsuario}>{nome}</Text>
        <Text style={styles.profissao}>Estudante ADS</Text>
        <TouchableOpacity
          style={[styles.botao, seguindo && styles.botaoDesativado]}
          activeOpacity={0.7}
          onPress={() => setSeguindo(!seguindo)}
          >
            <Text style={styles.textoBotao}>
              {seguindo ? "Já Seguindo" : "Seguir"}
            </Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Alterar nome..."
          value={nome}
          onChangeText={(texto) => setNome(texto)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  cartao: {
    backgroundColor: "#ffffff",
    padding: 30,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: "80%",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  nomeUsuario: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#14325A",
  },
  profissao: {
    fontSize: 16,
    color: "#505050",
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "#0064A0",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
  },
  textoBotao: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    padding: 10,
    textAlign: "center",
  },
  botaoDesativado: {
    backgroundColor: "#A0A0A0",
  }
})