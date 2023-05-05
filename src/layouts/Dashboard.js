import { useState } from 'react'
import styled from 'styled-components'
import HeadUser from '../components/HeadUser'
import NavLeft from '../components/NavLeft'
import NavTop from '../components/NavTop'
import FoodIntake from '../components/FoodIntake'
import ActivityGraph from '../components/ActivityGraph'
import SessionsGraph from '../components/SessionsGraph'
import PerformanceGraph from '../components/PerformanceGraph'
import TodayScoreGraph from '../components/TodayScoreGraph'
import { GetUserData, GetUserActivity } from '../api/api'

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
const Infos = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  left: 0;
  height: calc(45% - 10px);
  width: 100%;
`
const InfosGraph = styled.div`
  position: relative;
  height: 100%;
  width: calc(33.33% - 13.33px);
  background-color: #fbfbfb;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  &.infosgraph_sessions {
    background-color: #e60000;
  }
  &.infosgraph_performance {
    background-color: #282d30;
  }
`

function Dashboard({
  idUser,
  dataSource,
  switchUser,
  switchMockSource,
  switchDevSource,
}) {
  // les données devrait arriver ici, et couler dans les composants.
  // chaque appel doit renvoyer un objet avec les data + l'état du loader
  const userData = GetUserData(idUser, dataSource)
  console.log(userData.data)
  console.log(userData.isDataLoading)

  const userDataActivity = GetUserActivity(idUser, dataSource)
  // console.log(userDataActivity.data)
  // console.log(userDataActivity.isDataLoading)

  return (
    <div className="App">
      <NavTop />
      <Main>
        <HeadUser
          userData={userData}
          idUser={idUser}
          dataSource={dataSource}
          switchUser={switchUser}
          switchMockSource={switchMockSource}
          switchDevSource={switchDevSource}
        />
        <SectionUser>
          <ContainerGraph>
            <ActivityGraph idUser={idUser} dataSource={dataSource} />
            <Infos>
              <InfosGraph className="infosgraph_sessions">
                <SessionsGraph idUser={idUser} dataSource={dataSource} />
              </InfosGraph>
              <InfosGraph className="infosgraph_performance">
                <PerformanceGraph idUser={idUser} dataSource={dataSource} />
              </InfosGraph>
              <InfosGraph>
                <TodayScoreGraph idUser={idUser} dataSource={dataSource} />
              </InfosGraph>
            </Infos>
          </ContainerGraph>
          <FoodIntake idUser={idUser} dataSource={dataSource} />
        </SectionUser>
      </Main>
      <NavLeft />
    </div>
  )
}

export default Dashboard
