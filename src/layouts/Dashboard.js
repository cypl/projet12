import styled from 'styled-components'
import PropTypes from 'prop-types'
import API from '../api'
import HeadUser from '../components/HeadUser'
import NavLeft from '../components/NavLeft'
import NavTop from '../components/NavTop'
import FoodIntake from '../components/FoodIntake'
import ActivityGraph from '../components/ActivityGraph'
import SessionsGraph from '../components/SessionsGraph'
import PerformanceGraph from '../components/PerformanceGraph'
import TodayScoreGraph from '../components/TodayScoreGraph'

/**
 * Displays the home page.
 * @param {object} props - The props object containing the following properties:
 * @param {number} props.idUser - The ID of the user.
 * @param {string} props.dataSource - The name of the data source.
 * @param {function} props.switchUser - The function to switch user.
 * @param {function} props.switchMockSource - The function to switch to mock data source.
 * @param {function} props.switchDevSource - The function to switch to development data source.
 * @param {boolean} props.prod - Production mode = True/False
 * @returns {JSX.Element} - The JSX markup for the Dashboard component.
 */
function Dashboard({
  idUser,
  dataSource,
  switchUser,
  switchMockSource,
  switchDevSource,
  prod,
}) {
  // Calling data to send in components
  const userData = API.getUserData(idUser, dataSource)
  const userDataActivity = API.getUserActivity(idUser, dataSource)
  const userDataSessions = API.getUserSessions(idUser, dataSource)
  const userDataPerformance = API.getUserPerformance(idUser, dataSource)

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
          prod={prod}
        />
        <SectionUser>
          <ContainerGraph>
            <ActivityGraph userDataActivity={userDataActivity} />
            <Infos>
              <InfosGraph className="infosgraph_sessions">
                <SessionsGraph userDataSessions={userDataSessions} />
              </InfosGraph>
              <InfosGraph className="infosgraph_performance">
                <PerformanceGraph userDataPerformance={userDataPerformance} />
              </InfosGraph>
              <InfosGraph>
                <TodayScoreGraph userData={userData} />
              </InfosGraph>
            </Infos>
          </ContainerGraph>
          <FoodIntake userData={userData} />
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
  prod: PropTypes.bool,
}

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
