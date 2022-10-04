import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import AuthLayout from "../layout/AuthLayout";

const RegisterPage = () => {
  // sx en este caso hace referecina al style mientras que xs hace referencia al tamañp
  return (
    <>
      <AuthLayout title="Login">
        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Nombre Completo"
                type="texto"
                placeholder="Jhon Doe"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="correo"
                type="mail"
                placeholder="correo@hotmail.com"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="contraseña"
                type="password"
                placeholder="contraseña"
                fullWidth
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
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
            <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
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
