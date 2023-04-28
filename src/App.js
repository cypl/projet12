import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './layouts/Dashboard'
import Error404 from './layouts/Error404'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
