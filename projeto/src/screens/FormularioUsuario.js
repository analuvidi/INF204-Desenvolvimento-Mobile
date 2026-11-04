
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert
} from "react-native";

import api from "../services/api";

export default function FormularioUsuario({ onVoltar }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [enviando, setEnviando] = useState(false);

  const cadastrarUsuario = async () => {
    if (!nome.trim() || !email.trim()) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    try {
      setEnviando(true);

      const resposta = await api.post("/users", {
        name: nome,
        email: email
      });

      Alert.alert(
        "Sucesso",
        `Usuário ${resposta.data.name} cadastrado com sucesso!`
      );

      setNome("");
      setEmail("");
    } catch (erro) {
      Alert.alert(
        "Erro",
        "Não foi possível cadastrar o usuário."
      );

      console.error("Erro ao cadastrar usuário:", erro.message);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastrar Usuário</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={styles.botao}>
        <Button
          title={enviando ? "Enviando..." : "Cadastrar"}
          onPress={cadastrarUsuario}
          disabled={enviando}
        />
      </View>

      <View style={styles.botao}>
        <Button
          title="Voltar para a lista"
          onPress={onVoltar}
          color="#666"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 60,
    paddingHorizontal: 20
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#14325A",
    marginBottom: 30
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8
  },
  input: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20
  },
  botao: {
    marginBottom: 12
  }
});
