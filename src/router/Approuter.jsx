import React from 'react'
import { useSelector } from 'react-redux'
import {Routes, Route} from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import JournalRoutes from '../journal/routes/JournalRoutes'
import {CheckingAuth} from '../ui/'


export const Approuter = () => {

  const { status } = useSelector(state => state.auth);

  if (status === 'Checking') {
    return <CheckingAuth />
  } 

  return (
    <Routes>
    <Route path='/auth/*' element={ <AuthRoutes />}/>
        
    <Route path='/*' element={<JournalRoutes />} />

    </Routes>
  )
}

export default Approuter