import styled from 'styled-components'
import IconNav from './IconNav'

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
const Copyright = styled.p`
  color: #fff;
  font-size: 12px;
  font-weight: 500px;
  transform: rotate(270deg);
  position: absolute;
  bottom: 90px;
  left: -15px;
  white-space: nowrap;
`

function NavLeft() {
  return (
    <NavLeftContainer className="navleft">
      <NavLeftIcons>
        <IconNav
          iconSrc={'./assets/icon_meditation.png'}
          iconAlt={'Méditation'}
        />
        <IconNav iconSrc={'./assets/icon_natation.png'} iconAlt={'Natation'} />
        <IconNav iconSrc={'./assets/icon_cyclisme.png'} iconAlt={'Cyclisme'} />
        <IconNav
          iconSrc={'./assets/icon_musculation.png'}
          iconAlt={'Musculation'}
        />
      </NavLeftIcons>
      <Copyright>Copyright, SportSee 2023</Copyright>
    </NavLeftContainer>
  )
}
export default NavLeft
