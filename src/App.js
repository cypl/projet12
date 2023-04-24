import { useState } from 'react'
import HeadUser from './components/HeadUser'
import NavLeft from './components/NavLeft'
import NavTop from './components/NavTop'
import styled from 'styled-components'
import InfosGraph from './components/InfosGraph'
import FoodConsumption from './components/FoodConsumption'
import ActivityGraph from './components/ActivityGraph'
import { useFetchUserData } from './api/api'

const Main = styled.main`
  position: absolute;
  top: 90px;
  left: 110px;
  width: calc(100% - 110px);
  height: calc(100% - 90px);
  background-color: #fff;
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

// class UserData {
//   constructor(id, userInfos, todayScore, keyData) {
//     this.id = id
//     this.userInfos = userInfos
//     this.todayScore = todayScore
//     this.keyData = keyData
//   }
// }

function App() {
  const idUser = 12 // 12 ou 18
  const [dataUser, setDataUser] = useState({})
  useFetchUserData(idUser, setDataUser)

  // useEffect(() => {
  //   async function fetchData(idUser) {
  //     try {
  //       const response = await fetch(`http://localhost:3000/user/${idUser}`)
  //       const dataUser = await response.json()
  //       setDataUser(
  //         new UserData(
  //           dataUser.data.id,
  //           dataUser.data.userInfos,
  //           dataUser.data.todayScore,
  //           dataUser.data.keyData
  //         )
  //       )
  //     } catch (error) {
  //       console.log(error)
  //     } finally {
  //     }
  //   }
  //   fetchData(idUser)
  // }, [idUser])

  return (
    <div className="App">
      <NavTop />
      <Main>
        <HeadUser
          firstName={dataUser.userInfos && dataUser.userInfos.firstName}
        />
        <SectionUser>
          <ContainerGraph>
            <ActivityGraph />
            <InfosGraph />
          </ContainerGraph>
          <FoodConsumption
            calories={dataUser.keyData && dataUser.keyData.calorieCount}
            proteines={dataUser.keyData && dataUser.keyData.proteinCount}
            glucides={dataUser.keyData && dataUser.keyData.carbohydrateCount}
            lipides={dataUser.keyData && dataUser.keyData.lipidCount}
          />
        </SectionUser>
      </Main>
      <NavLeft />
    </div>
  )
}

export default App
