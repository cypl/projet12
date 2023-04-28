import NavLeft from '../components/NavLeft'
import NavTop from '../components/NavTop'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Main = styled.main`
  position: absolute;
  top: 90px;
  left: 110px;
  width: calc(100% - 110px);
  height: calc(100% - 90px);
  background-color: #fUserData;
`
const Error404Section = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Error404Container = styled.article`
  width: 95%;
`
const Error404Title = styled.p`
  text-align: center;
  font-size: 90px;
  line-height: 1;
  padding-bottom: 20px;
  font-weight: 400;
  color: #e60000;
`
const Error404Text = styled.p`
  text-align: center;
  .btn {
    display: inline-block;
    padding: 15px 20px;
    margin-top: 20px;
    font-size: 12px;
    line-height: 1;
    background-color: #ffc5c5;
    color: #e60000;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 4px;
    transition: 0.05s color ease-in-out, 0.1s background-color ease-in-out;
    &:hover {
      background-color: #e60000;
      color: #fff;
      transition: 0.05s color ease-in-out, 0.1s background-color ease-in-out;
    }
  }
`

function Error404() {
  return (
    <div className="App">
      <NavTop />
      <Main>
        <Error404Section>
          <Error404Container>
            <Error404Title>404</Error404Title>
            <Error404Text>
              La page que vous recherchez n'existe pas. <br />
              <NavLink to="/" className="btn">
                Retour à l'accueil
              </NavLink>
            </Error404Text>
          </Error404Container>
        </Error404Section>
      </Main>
      <NavLeft />
    </div>
  )
}

export default Error404
