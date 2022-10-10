import React, { useMemo } from "react";
import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import AuthLayout from "../layout/AuthLayout";
import {useForm} from '../../hooks'
import { useDispatch } from 'react-redux'
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth";
import { useSelector } from "react-redux";

const LoginPage = () => {
  // sx en este caso hace referecina al style mientras que xs hace referencia al tamaño

  const {status} = useSelector(state => state.auth)


  const dispatch = useDispatch()
  

const {email, password, onInputChange} = useForm({
  email: 'ivan_piccardo@hotmail.com',
  password: '123456'
})

const isAuthenticating = useMemo(() => status === 'checking', [status])


const onSubmit = (event) => {
  event.preventDefault();

  console.log({email, password})
  dispatch(checkingAuthentication())
}

const onGoogleSignIn = () => {
  console.log('onGoogleSignIn')
  dispatch(startGoogleSignIn())
}

  return (
    <>
      <AuthLayout title="Login">
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@google.com"
                fullWidth
                name='email'
                value={email}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="contraseña"
                type="password"
                placeholder="contraseña"
                fullWidth
                name='password'
                value={password}
                onChange={onInputChange}
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
              <Grid item xs={12} sm={6}>
                <Button disabled={ isAuthenticating } type='submit' variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                disabled={ isAuthenticating }
                 variant="contained" 
                 fullWidth
                 onClick={ onGoogleSignIn }
                 >
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};

export default LoginPage;
