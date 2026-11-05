import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";

// Funo de inicializacao das tabelas no disco
const iniciarBanco = async (db) => {
  await db.execAsync("PRAGMA journal_mode = WAL;");
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS tarefas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      descricao TEXT NOT NULL,
      concluida INTEGER DEFAULT 0
    );
  `);
  console.log("Base de Dados inicializada!");
};

export default function App() {
  return (
    // Engloba a aplicacao garantindo o acesso global
    <SQLiteProvider databaseName="app-database.db" onInit={iniciarBanco}>
      <EcraPrincipal />
    </SQLiteProvider>
  );
}

function EcraPrincipal() {
  // Acesso instancia do banco de dados relacional
  const db = useSQLiteContext();

  const [nomeUsuario, setNomeUsuario] = useState("Visitante");
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  // Efeito para carregar dados assim que o ecra abrir
  useEffect(() => {
    carregarPreferencias();
    carregarTarefas();
  }, []);

  // Leitura Assincrona Chave-Valor
  const carregarPreferencias = async () => {
    const nomeSalvo = await AsyncStorage.getItem("@AppTarefas:Nome");
    if (nomeSalvo) setNomeUsuario(nomeSalvo);
  };

  // Gravacao Assincrona Chave-Valor
  const salvarNome = async () => {
    const novoNome = "Estudante INF204";
    await AsyncStorage.setItem("@AppTarefas:Nome", novoNome);
    setNomeUsuario(novoNome);
  };

  // Leitura SQL (SELECT)
  const carregarTarefas = async () => {
    try {
      const resultados = await db.getAllAsync("SELECT * FROM tarefas ORDER BY id DESC;");
      setTarefas(resultados);
    } catch (erro) {
      console.error("Falha ao ler dados", erro);
    }
  };

  // Insercao SQL com Bindings de Seguranca (INSERT)
  const adicionarTarefa = async () => {
    if (novaTarefa.trim() === "") return;

    try {
      await db.runAsync("INSERT INTO tarefas (descricao, concluida) VALUES (?, ?);", [novaTarefa, 0]);
      setNovaTarefa("");
      carregarTarefas(); // Atualiza a lista visualmente
    } catch (erro) {
      console.error("Erro no insert", erro);
    }
  };

  // Atualizacao SQL (UPDATE)
  const alternarStatus = async (id, statusAtual) => {
    const novoStatus = statusAtual === 1 ? 0 : 1;
    await db.runAsync("UPDATE tarefas SET concluida = ? WHERE id = ?;", [novoStatus, id]);
    carregarTarefas();
  };
  