import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// 1. Criação do objeto de Contexto
export const AuthContext = createContext({});

// 2. O componente Provider que irá envelopar a aplicação
export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null); // null = Visitante

  // Ao abrir o app, lê o disco e restaura a sessão, se existir
  useEffect(() => {
    async function carregarSessao() {
      try {
        const usuarioSalvo = await AsyncStorage.getItem("@AppAuth:Usuario");
        if (usuarioSalvo) setUsuario(JSON.parse(usuarioSalvo));
      } catch (erro) {
        console.error("Falha ao restaurar sessão", erro);
      }
    }
    carregarSessao();
  }, []);

  // Simulação de um Login
  async function signIn(email, senha) {
    // Aqui aconteceria uma chamada de API (axios.post)
    const respostaAPI = { id: "123", nome: "Turma INF204", email: email };
    await AsyncStorage.setItem("@AppAuth:Usuario", JSON.stringify(respostaAPI));
    setUsuario(respostaAPI);
  }

  // Simulação de um Logout
  async function signOut() {
    await AsyncStorage.removeItem("@AppAuth:Usuario");
    setUsuario(null);
  }

  return (
    // Injetamos as propriedades e métodos no "canal" global
    // A conversão booleana (!!usuario) indica se há alguém logado
    <AuthContext.Provider value={{ logado: !!usuario, usuario, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}