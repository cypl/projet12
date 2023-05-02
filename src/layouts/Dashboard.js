import { useState } from 'react'
import HeadUser from '../components/HeadUser'
import NavLeft from '../components/NavLeft'
import NavTop from '../components/NavTop'
import styled from 'styled-components'
import InfosGraph from '../components/InfosGraph'
import FoodIntake from '../components/FoodIntake'
import ActivityGraph from '../components/ActivityGraph'

const Main = styled.main`
  position: absolute;
  top: 90px;
  left: 110px;
  width: calc(100% - 110px);
  height: calc(100% - 90px);
  background-color: #fUserData;
`
const SectionUser = styled.section`
  position: absolute;
  bottom: 30px;
  width: 90%;
  max-width: 1100px;
  left: 50%;
  transform: translate(-50%, 0);
  height: calc(100% - 180px);
  @media (max-width: 1024px) {
    width: calc(100% - 60px);
  }
`
const ContainerGraph = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
  width: calc(80% - 10px);
`

function Dashboard() {
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
    <div className="App">
      <NavTop />
      <Main>
        <HeadUser
          idUser={idUser}
          dataSource={dataSource}
          switchUser={switchUser}
          switchMockSource={switchToMockSource}
          switchDevSource={switchToDevSource}
        />
        <SectionUser>
          <ContainerGraph>
            <ActivityGraph idUser={idUser} dataSource={dataSource} />
            <InfosGraph />
          </ContainerGraph>
          <FoodIntake idUser={idUser} dataSource={dataSource} />
        </SectionUser>
      </Main>
      <NavLeft />
    </div>
  )
}

export default Dashboard
