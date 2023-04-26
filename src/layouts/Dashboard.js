import { useState } from 'react'
import HeadUser from '../components/HeadUser'
import NavLeft from '../components/NavLeft'
import NavTop from '../components/NavTop'
import styled from 'styled-components'
import InfosGraph from '../components/InfosGraph'
import FoodConsumption from '../components/FoodConsumption'
import ActivityGraph from '../components/ActivityGraph'
import { useFetchUserData, useFetchUserActivity } from '../api/api'
import UserData from '../api/api'

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
  const [idUser, setUser] = useState(12) // 12 ou 18
  function switchUser() {
    if (idUser === 12) {
      setUser(18)
    } else {
      setUser(12)
    }
  }

  // - retrieves information from a user
  const [dataUser, setDataUser] = useState({})
  useFetchUserData(idUser, setDataUser)
  const fUserData = new UserData(dataUser)

  // - retrieves activity from a user
  const [dataActivity, setDataActivity] = useState({})
  useFetchUserActivity(idUser, setDataActivity)

  return (
    <div className="App">
      <NavTop />
      <Main>
        <HeadUser
          firstName={fUserData.userInfos && fUserData.userInfos.firstName}
          switchUser={switchUser}
          score={fUserData && fUserData.todayScore}
        />
        <SectionUser>
          <ContainerGraph>
            <ActivityGraph data={dataActivity} />
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
