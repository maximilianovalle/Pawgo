import { Route, Routes } from 'react-router-dom'
import Test from './pages/Test.tsx'

function App() {
  return (
    <Routes>

      {/* Define routes here, example: */}
      <Route path="/test" element={<Test />} />

    </Routes>
  )
}

export default App