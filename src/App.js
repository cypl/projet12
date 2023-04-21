import HeadUser from './components/HeadUser'
import NavLeft from './components/NavLeft'
import NavTop from './components/NavTop'
import styled from 'styled-components'
import InfosGraph from './components/InfosGraph'
import FoodConsumption from './components/FoodConsumption'
import ActivityGraph from './components/ActivityGraph'

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

function App() {
  return (
    <div className="App">
      <NavTop />
      <Main>
        <HeadUser />
        <SectionUser>
          <ContainerGraph>
            <ActivityGraph />
            <InfosGraph />
          </ContainerGraph>
          <FoodConsumption />
        </SectionUser>
      </Main>
      <NavLeft />
    </div>
  )
}

export default App
