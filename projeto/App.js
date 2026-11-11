import React from "react";
import { AuthProvider } from "./src/contexts/AuthContext";
import { ThemeProvider } from "./src/contexts/TemaContext";
import Rotas from "./src/routes";

export default function App() {
  return (
    // Providers aninhados: o tema envolve a autenticação
    <ThemeProvider>
      <AuthProvider>
        <Rotas />
      </AuthProvider>
    </ThemeProvider>
  );
}