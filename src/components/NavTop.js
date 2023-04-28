import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavTopContainer = styled.header`
  position: absolute;
  width: 100%;
  height: 90px;
  left: 0;
  top: 0;
  background-color: #020203;
  z-index: 1;
  box-shadow: 0px 4px 4px 0px #00000040;
`
const LogoFig = styled.figure`
  position: absolute;
  height: 58px;
  width: 178px;
  top: 16px;
  left: 30px;
`
const LogoImg = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
`
const NavTopMenu = styled.nav`
  position: absolute;
  right: 30px;
  top: 33px;
  height: 24px;
  width: calc(100% - 250px);
`
const NavTopMenuUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  max-width: 1000px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  height: 100%;
  font-size: 19px;
  line-height: 24px;
  font-weight: 400;
`
const NavTopMenuItem = styled.li`
  & a {
    color: #fff;
    text-decoration: none;
    padding: 8px 15px;
    background-color: #000;
    border-radius: 3px;
    transition: 0.1s background-color ease-in-out;
  }
  & a:hover {
    background-color: #191919;
    transition: 0.1s background-color ease-in-out;
  }
  & a.active {
    background-color: #191919;
  }
`

function NavTop() {
  return (
    <NavTopContainer>
      <LogoFig>
        <LogoImg
          src={'./assets/logo_sportsee.svg'}
          alt={'logo sportSee'}
        ></LogoImg>
      </LogoFig>
      <NavTopMenu>
        <NavTopMenuUl>
          <NavTopMenuItem>
            <NavLink to="/">Accueil</NavLink>
          </NavTopMenuItem>
          <NavTopMenuItem>
            <NavLink to="/profil">Profil</NavLink>
          </NavTopMenuItem>
          <NavTopMenuItem>
            <NavLink to="/reglages">Réglages</NavLink>
          </NavTopMenuItem>
          <NavTopMenuItem>
            <NavLink to="/communaute">Communauté</NavLink>
          </NavTopMenuItem>
        </NavTopMenuUl>
      </NavTopMenu>
    </NavTopContainer>
  )
}

export default NavTop
