import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { IconButton, Toolbar, AppBar, Grid, Typography } from '@mui/material'
import {drawerWidth} from '../JournalLayout'
import React from 'react'


const NavBar = ({drawerWidth = 240}) => {
  return (
    <AppBar position='fixed' sx={{width: {sm: `calc(100% - ${drawerWidth}px)`}, ml: {sm: `${drawerWidth}px`}}}>
    <Toolbar>
        <IconButton
        color='inherit'
        edge='start'
        sx={{mr: 2, display: {sm: 'none'}}}>
            <MenuOutlined />
        </IconButton>
        <Grid container direction='row' justifyContent='space-Between' alignItems='center'>
        <Typography variant='h6' noWrap component='div'>JournalApp</Typography>
            <IconButton color='error'>
                <LogoutOutlined />
            </IconButton>
        </Grid>
    </Toolbar>
    </AppBar>
  )
}

export default NavBar