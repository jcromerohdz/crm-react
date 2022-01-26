import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InitSession from './layout/InitSession'
import Layout from './layout/Layout'
import Init from './pages/Init'
import LoginForm from './pages/LoginForm'
import NewCustomer from './pages/NewCostumer'
import EditCustomer from './pages/EditCustomer'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitSession />}>
          <Route index element={<LoginForm />}/>
        </Route>
        <Route path="/customers" element={<Layout />}>
          <Route index element={<Init />}/>
          <Route path="new" element={<NewCustomer />}/>
          <Route path="edit/:id" element={<EditCustomer />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
