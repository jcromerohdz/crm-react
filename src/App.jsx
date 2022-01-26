import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InitSession from './layout/InitSession'
import Layout from './layout/Layout'
import Init from './pages/Init'
import LoginForm from './pages/LoginForm'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitSession />}>
          <Route index element={<LoginForm />}/>
        </Route>
        <Route path="/costumers" element={<Layout />}>
          <Route index element={<Init />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
