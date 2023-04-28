import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './layouts/Dashboard'
import Error404 from './layouts/Error404'
import InProgress from './layouts/InProgress'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profil" element={<InProgress />} />
        <Route path="/reglages" element={<InProgress />} />
        <Route path="/communaute" element={<InProgress />} />
        <Route path="/yoga" element={<InProgress />} />
        <Route path="/natation" element={<InProgress />} />
        <Route path="/cyclisme" element={<InProgress />} />
        <Route path="/musculation" element={<InProgress />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
