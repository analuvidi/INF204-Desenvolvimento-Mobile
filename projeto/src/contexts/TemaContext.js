import React, { createContext, useState } from "react";

export const TemaContext = createContext({});

export function ThemeProvider({ children }) {
  const [tema, setTema] = useState("claro"); // "claro" ou "escuro"

  function alternarTema() {
    setTema(tema === "claro" ? "escuro" : "claro");
  }

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
}