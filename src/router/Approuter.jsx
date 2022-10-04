import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import JournalRoutes from '../journal/routes/JournalRoutes'


const Approuter = () => {
  return (
    <Routes>
    <Route path='/auth/*' element={ <AuthRoutes />}/>
        
    <Route path='/*' element={<JournalRoutes />} />

    </Routes>
  )
}

export default Approuter