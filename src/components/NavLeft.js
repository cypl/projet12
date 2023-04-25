import styled from 'styled-components'
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 6px;
  background-color: #fff;
  margin: 20px 0;
  cursor: pointer;
  transition: 0.1s background-color ease-in-out;
  &:hover {
    background-color: #ededed;
    transition: 0.1s background-color ease-in-out;
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
          <IconMeditation color={'#e60000'} />
        </IconNavBox>
        <IconNavBox>
          <IconNatation color={'#e60000'} />
        </IconNavBox>
        <IconNavBox>
          <IconCyclisme color={'#e60000'} />
        </IconNavBox>
        <IconNavBox>
          <IconMusculation color={'#e60000'} />
        </IconNavBox>
      </NavLeftIcons>
      <Copyright>Copyright, SportSee 2023</Copyright>
    </NavLeftContainer>
  )
}
export default NavLeft
