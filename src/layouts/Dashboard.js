import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  GetUserData,
  GetUserActivity,
  GetUserSessions,
  GetUserPerformance,
} from '../api/api'
import HeadUser from '../components/HeadUser'
import NavLeft from '../components/NavLeft'
import NavTop from '../components/NavTop'
import FoodIntake from '../components/FoodIntake'
import ActivityGraph from '../components/ActivityGraph'
import SessionsGraph from '../components/SessionsGraph'
import PerformanceGraph from '../components/PerformanceGraph'
import TodayScoreGraph from '../components/TodayScoreGraph'

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
  // Appel des données, à envoyer dans les composants
  const userData = GetUserData(idUser, dataSource)
  console.log(userData)
  const userDataActivity = GetUserActivity(idUser, dataSource)
  const userDataSessions = GetUserSessions(idUser, dataSource)
  const userDataPerformance = GetUserPerformance(idUser, dataSource)

  return (
    <div className="App">
      <NavTop />
      <Main>
        <HeadUser
          userData={userData}
          dataSource={dataSource}
          switchUser={switchUser}
          switchMockSource={switchMockSource}
          switchDevSource={switchDevSource}
        />
        <SectionUser>
          <ContainerGraph>
            <ActivityGraph userDataActivity={userDataActivity} />
            <Infos>
              <InfosGraph className="infosgraph_sessions">
                <SessionsGraph userDataSessions={userDataSessions} />
              </InfosGraph>
              <InfosGraph className="infosgraph_performance">
                <PerformanceGraph idUser={idUser} dataSource={dataSource} />
              </InfosGraph>
              <InfosGraph>
                <TodayScoreGraph userData={userData} />
              </InfosGraph>
            </Infos>
          </ContainerGraph>
          <FoodIntake
            userData={userData}
            idUser={idUser}
            dataSource={dataSource}
          />
        </SectionUser>
      </Main>
      <NavLeft />
    </div>
  )
}

export default Dashboard

Dashboard.propTypes = {
  idUser: PropTypes.number,
  dataSource: PropTypes.string,
  switchUser: PropTypes.func,
  switchMockSource: PropTypes.func,
  switchDevSource: PropTypes.func,
}
