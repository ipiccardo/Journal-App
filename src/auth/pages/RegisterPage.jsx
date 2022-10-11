import { Link as RouterLink } from "react-router-dom";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import AuthLayout from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {startCreatingUserWithEmailPassword} from '../../store/auth'

const formData = {
  email: "piccardo.ivan@gmail.com",
  password: "123456",
  displayName: "Iván Piccardo",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe de tener una @"],
  password: [
    (value) => value.length >= 6,
    "El password debe de tener mas de 6 letras",
  ],
  displayName: [(value) => value.length >= 1, "El nombre es requerido"],
};

export const RegisterPage = () => {
  // sx en este caso hace referecina al style mientras que xs hace referencia al tamaño

  const dispatch = useDispatch()
  const [formSubmitted, setformSubmitted] = useState(false);

  const {status, errorMessage} = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);


  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setformSubmitted(true);

    if ( !isFormValid ) return;


    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <>
      <AuthLayout title="Login">
        <h1>FormValid {isFormValid ? "Valido" : "Incorrecto"}</h1>
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Nombre Completo"
                type="texto"
                placeholder="Jhon Doe"
                fullWidth
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                // PONGO LA DOBLE NEGACIÓN PARA QUE LO CONVIERTA EN UN BOOLEANO
                error={!!displayNameValid && formSubmitted}
                helperText={displayNameValid}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="correo"
                type="mail"
                placeholder="correo@hotmail.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
                error={!!emailValid && formSubmitted}
                helperText={emailValid}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="contraseña"
                type="password"
                placeholder="contraseña"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
                error={!!passwordValid && formSubmitted}
                helperText={passwordValid}
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            {/* LA DOBLE NEGACiÓN CONVIERTE ALGO NULLO EN BOOLEANO */}
            <Grid item xs={12} sm={6} display={!!errorMessage ? '' : 'none'}>
               <Alert severity="error">{errorMessage}</Alert>
              </Grid>
              
              
              
              <Grid item xs={12} sm={6}>
                <Button disabled={ isCheckingAuthentication } type="submit" variant="contained" fullWidth onClick={onSubmit}>
                  Crear Cuenta
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  <Typography sx={{ ml: 1 }}>Crear cuenta</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
              <Link component={RouterLink} color="inherit" to="/auth/Login">
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};

export default RegisterPage;
