import React from 'react'
import Approuter from './router/Approuter'
import { BrowserRouter } from "react-router-dom";
import AppTheme from './theme/AppTheme';

const JournalApp = () => {
  return (
    <AppTheme>
      <Approuter />
    </AppTheme>
  )
}

export default JournalApp 