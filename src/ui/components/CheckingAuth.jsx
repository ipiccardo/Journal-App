import React from 'react'
import { CircularProgress, Grid } from '@mui/material'

export const CheckingAuth = () => {
  return (
    <>
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
      >
      <Grid
          item
          sx={{width: {sn: 450} }}
          directions='row'
          justifyContent='center'
        >
            <CircularProgress color='warning' />
        </Grid>
      </Grid>
    </>
    
  )
}