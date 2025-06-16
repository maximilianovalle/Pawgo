// Application Entry Point

import { Route, Routes } from 'react-router-dom'
import Main from './pages/mainPage.tsx'

// .tsx because file renders HTML/React
// ex: <Routes>

function App() {
  return (
    <Routes>

      {/* Define routes here, example: */}
      <Route path="/" element={<Main />} />

    </Routes>
  )
}

export default App

// React, Typescript
// Vite: frontend build tool + development server

// Code is written in React + Typescript
// Vite runs code in the browser

// ! - When code is ready for deployment, Vite bundles and optimizes frontend for production