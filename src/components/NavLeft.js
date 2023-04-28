import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { IconMeditation } from '../utils/icons'
import { IconCyclisme } from '../utils/icons'
import { IconNatation } from '../utils/icons'
import { IconMusculation } from '../utils/icons'

const NavLeftContainer = styled.footer`
  position: absolute;
  width: 110px;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #020203;
`
const NavLeftIcons = styled.ul`
  width: 64px;
  height: auto;
  position: absolute;
  top: 50%;
  left: 27px;
  transform: translate(0%, -50%);
`
const IconNavBox = styled.li`
  width: 64px;
  height: 64px;
  border-radius: 6px;
  margin: 20px 0;
  overflow: hidden;
  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 64px;
    height: 64px;
    background-color: #fff;
    transition: 0.1s background-color ease-in-out;
  }
  & a:hover {
    background-color: #ffc5c5;
    transition: 0.1s background-color ease-in-out;
  }
  & a.active {
    background-color: #ffc5c5;
  }
`
const Copyright = styled.p`
  color: #fff;
  font-size: 12px;
  font-weight: 500px;
  transform: rotate(270deg);
  position: absolute;
  bottom: 87px;
  left: -15px;
  white-space: nowrap;
`

function NavLeft() {
  return (
    <NavLeftContainer className="navleft">
      <NavLeftIcons>
        <IconNavBox>
          <NavLink to="/yoga">
            <IconMeditation color={'#e60000'} />
          </NavLink>
        </IconNavBox>
        <IconNavBox>
          <NavLink to="/natation">
            <IconNatation color={'#e60000'} />
          </NavLink>
        </IconNavBox>
        <IconNavBox>
          <NavLink to="/cyclisme">
            <IconCyclisme color={'#e60000'} />
          </NavLink>
        </IconNavBox>
        <IconNavBox>
          <NavLink to="/musculation">
            <IconMusculation color={'#e60000'} />
          </NavLink>
        </IconNavBox>
      </NavLeftIcons>
      <Copyright>Copyright, SportSee 2023</Copyright>
    </NavLeftContainer>
  )
}
export default NavLeft
