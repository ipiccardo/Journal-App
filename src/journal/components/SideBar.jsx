import { TurnedInNot } from '@mui/icons-material'
import { Drawer, Box, Toolbar, Typography, Divider, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText, List } from '@mui/material'
import React from 'react'

const SideBar = ({drawerWidth = 240}) => {
  return (
    <Box
    component='nav'
    sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}>

<Drawer 
    variant='permanent'
    open
    sx={{
        display: { xs: 'block'}, '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
    }}
>
<Toolbar>
    <Typography variant='h6' noWrap component='div'>
            Iván Piccardo
    </Typography>
</Toolbar>
<Divider />

<List>
{
    ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
        <ListItem key={ text } disablePadding>
        <ListItemButton>
            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>
            <Grid container>
            <ListItemText primary={text}>
            <ListItemText secondary={'Probando el texto secundario'}></ListItemText>

            </ListItemText>

            </Grid>
        </ListItemButton>

        </ListItem>
    ))
}
</List>


</Drawer>
    </Box>
  )
}

export default SideBar