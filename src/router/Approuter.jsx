import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthRoutes from "../auth/routes/AuthRoutes";
import JournalRoutes from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui/";
import { useCheckAuth } from "../hooks";

export const Approuter = () => {
  // AL RETORNAR STATUS COMO OBJETO, DEBO DESESTRUCTURARLO
  // SI RETORNARA SOLAMENTE STATUS, NO HABRÏA FALTA DESESTRUCTURAR
  // SERÍA const status = useCheckAuth()
  
  const  {status}  = useCheckAuth();

  if (status === "Checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};

export default Approuter;
