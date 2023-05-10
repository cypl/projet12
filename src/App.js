import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Dashboard from './layouts/Dashboard'
import Error404 from './layouts/Error404'
import InProgress from './layouts/InProgress'

function App() {
  // - set a user
  const [idUser, setUser] = useState(12) // 12 or 18

  // - set a data source
  const [dataSource, setDataSource] = useState('MOCK') // MOCK or DEV

  function switchUser() {
    idUser === 12 && setUser(18)
    idUser === 18 && setUser(12)
  }

  function switchToMockSource() {
    dataSource === 'DEV' && setDataSource('MOCK')
  }

  function switchToDevSource() {
    dataSource === 'MOCK' && setDataSource('DEV')
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Dashboard
              idUser={idUser}
              dataSource={dataSource}
              switchUser={switchUser}
              switchMockSource={switchToMockSource}
              switchDevSource={switchToDevSource}
            />
          }
        />
        <Route path='/profil' element={<InProgress />} />
        <Route path='/reglages' element={<InProgress />} />
        <Route path='/communaute' element={<InProgress />} />
        <Route path='/yoga' element={<InProgress />} />
        <Route path='/natation' element={<InProgress />} />
        <Route path='/cyclisme' element={<InProgress />} />
        <Route path='/musculation' element={<InProgress />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
