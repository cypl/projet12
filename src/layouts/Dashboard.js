import { useState } from 'react'
import HeadUser from '../components/HeadUser'
import NavLeft from '../components/NavLeft'
import NavTop from '../components/NavTop'
import styled from 'styled-components'
import InfosGraph from '../components/InfosGraph'
import FoodConsumption from '../components/FoodConsumption'
import ActivityGraph from '../components/ActivityGraph'
import { useFetch } from '../api/api'
import { UserData, UserDataActivity } from '../dataModels/dataModels'

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
  const [dataSource, setDataSource] = useState('MOCK') // MOCK or BACK

  function switchUser() {
    idUser === 12 && setUser(18)
    idUser === 18 && setUser(12)
  }

  function switchToMockSource() {
    dataSource === 'BACK' && setDataSource('MOCK')
  }
  function switchToBackSource() {
    dataSource === 'MOCK' && setDataSource('BACK')
  }

  // - retrieves information from a user
  const [dataUser, setDataUser] = useState({})
  useFetch(
    idUser,
    `../data/mockedUsersInfos.json`,
    `http://localhost:3000/user/${idUser}`,
    dataSource,
    setDataUser
  )
  const fUserData = new UserData(dataUser)

  // - retrieves activity from a user
  const [dataActivity, setDataActivity] = useState({})
  useFetch(
    idUser,
    `../data/mockedUsersActivity.json`,
    `http://localhost:3000/user/${idUser}/activity`,
    dataSource,
    setDataActivity
  )
  const fUserDataActivity = new UserDataActivity(dataActivity)

  return (
    <div className="App">
      <NavTop />
      <Main>
        <HeadUser
          firstName={fUserData.userInfos && fUserData.userInfos.firstName}
          switchUser={switchUser}
          switchMockSource={switchToMockSource}
          switchBackSource={switchToBackSource}
          score={fUserData && fUserData.todayScore}
          dataSource={dataSource}
        />
        <SectionUser>
          <ContainerGraph>
            <ActivityGraph data={fUserDataActivity} />
            <InfosGraph />
          </ContainerGraph>
          <FoodConsumption
            calorie={fUserData.keyData && fUserData.keyData.calorieCount}
            protein={fUserData.keyData && fUserData.keyData.proteinCount}
            carbo={fUserData.keyData && fUserData.keyData.carbohydrateCount}
            lipid={fUserData.keyData && fUserData.keyData.lipidCount}
          />
        </SectionUser>
      </Main>
      <NavLeft />
    </div>
  )
}

export default Dashboard
