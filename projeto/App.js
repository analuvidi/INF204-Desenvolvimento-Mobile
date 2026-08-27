import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return(
    <View style={StyleSheet.container}>
      <View>
        {/*Imagem sla */}
        <Image
          source={{ uri: "https://imgs.search.brave.com/86qNcvR2VYjPouUTE6vJHIh-DRqpXfqLuShAAFpfQBY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/aXMtdGhlcmUtYS1z/b3VyY2UtZm9yLXRo/ZXNlLTNkLWNnaS1l/bW9qaXMtdjAtb3M5/Nm96Y245a29mMS5w/bmc_d2lkdGg9NTEy/JmZvcm1hdD1wbmcm/YXV0bz13ZWJwJnM9/N2EyMjAzNzlkOWNk/YTM2YmUwYjE3ZjRl/MTc0N2JiOTlkNWU5/NjhhNw"}}
          style={StyleSheet.avatar}
        />
        <Text style={StyleSheet.nomeUsuario}>Ana Luiza</Text>
        <Text style={StyleSheet.profissao}>Estudante ADS</Text>
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
    fontSize: 16,
    color: "#14325A",
  },
  profissao: {
    fontSize: 16,
    color: "#505050",
    marginBottom: 20,
  }
})