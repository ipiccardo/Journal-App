import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FirebaseAuth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "../store/auth";

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    //CUANDO CAMBIA EL ESTADO DE LA AUTENTICACIÓN
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { uid, email, displayName, photoUrl } = user;
      dispatch(login({ uid, email, displayName, photoUrl }));
    });
  }, []);
  return {
    status
  }
};
