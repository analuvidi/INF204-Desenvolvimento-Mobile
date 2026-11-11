import React, { createContext, useState } from "react";

// 1. Criação do objeto de Contexto
export const AuthContext = createContext ({});

// 2. O componente Provider que irá envelopar a aplicação
export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null); // null = Visitante

  // Simulação de um login
  async function singIn(email, senha) {
      // Aqui aconteceria uma chamada de API (axios.post)
      const repostaAPI = { id: "123", nome: "Turma INF204", email: email };
      setUsuario(repostaAPI);
  }

  // Simulação de um Logout
  function signOut(){
      setUsuario(null);
  }
  
  return (
    // Injetamos as propriedades e métodos no "canal" global
    // A conversão booleana (!!usuario) indica se há alguém logado
    <AuthContext.Provider value ={{ logado: !!usuario, usuario, singIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
